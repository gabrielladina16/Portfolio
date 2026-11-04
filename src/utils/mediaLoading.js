import metadata from "../data/mediaMetadata.json";
import previewVariants from "../data/workPreviewVariants.json";
import { createMediaQueue } from "./mediaQueue.js";

const assetUrls = import.meta.glob("../assets/**/*.{png,jpg,jpeg,webp,gif,mp4}", {
  eager: true, query: "?url", import: "default",
});
const assets = new Map(Object.entries(assetUrls).map(([path, url]) => [path.replace("../assets/", ""), url]));
const dimensions = new Map([...assets].map(([name, url]) => [url, metadata[name]]));
const workPreviews = new Map(Object.entries(previewVariants).map(([name, preview]) => [assets.get(name), assets.get(preview)]));
let dispose;

export function prepareMedia(markup) {
  const template = document.createElement("template");
  template.innerHTML = markup;
  template.content.querySelectorAll("img[src], video").forEach(media => {
    const video = media.tagName === "VIDEO";
    let src = media.getAttribute("src") || media.querySelector("source[src]")?.getAttribute("src");
    if (!src) return;
    if (!video && media.closest('.page-work .project-visual')) src = workPreviews.get(src) || src;
    const size = dimensions.get(src);
    if (size && !media.hasAttribute("width") && !media.hasAttribute("height")) {
      media.setAttribute("width", size.width);
      media.setAttribute("height", size.height);
    }
    if (size) media.style.setProperty("--media-aspect-ratio", `${size.width} / ${size.height}`);
    media.dataset.mediaState = "loading";
    media.dataset.mediaSrc = src;
    media.setAttribute("aria-busy", "true");
    media.removeAttribute("src");
    if (video) {
      media.dataset.mediaAutoplay = String(media.autoplay);
      media.removeAttribute("autoplay");
      media.preload = "none";
      const poster = (size?.poster && assets.get(size.poster)) || media.getAttribute("poster");
      if (poster) media.dataset.mediaPoster = poster;
      media.removeAttribute("poster");
      media.querySelectorAll("source").forEach(source => source.remove());
    } else {
      media.decoding = "async";
      media.loading = "eager"; // The observer and queue determine download priority.
    }
  });
  template.content.querySelectorAll("[data-media-group]").forEach(group => {
    group.dataset.mediaGroupState = "loading";
    group.setAttribute("aria-busy", "true");
  });
  return template.content;
}

export function initMediaLoading(root) {
  dispose?.();
  const controller = new AbortController();
  const { signal } = controller;
  const enqueue = createMediaQueue(signal);
  const records = new Map();
  const buttons = new Map();
  const cancellations = new Set();
  const connection = navigator.connection;
  const conserveData = connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType || '');
  const visible = media => {
    const rect = media.getBoundingClientRect();
    return !document.hidden && rect.width > 0 && rect.height > 0 && rect.bottom > 0 && rect.top < window.innerHeight && rect.right > 0 && rect.left < window.innerWidth;
  };
  const priority = media => {
    const rect = media.getBoundingClientRect();
    const distance = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);
    return (visible(media) ? 100 : 0) + (media.fetchPriority === 'high' ? 20 : 0) - distance / 1000;
  };
  const updateGroup = media => {
    const group = media.closest('[data-media-group]');
    if (!group) return;
    const states = [...group.querySelectorAll('[data-media-state]')].map(item => item.dataset.mediaState);
    group.dataset.mediaGroupState = states.includes('error') ? 'error' : states.includes('loading') ? 'loading' : 'ready';
    if (group.dataset.mediaGroupState === 'loading') group.setAttribute('aria-busy', 'true');
    else group.removeAttribute('aria-busy');
  };
  const state = (media, next) => {
    media.dataset.mediaState = next;
    if (next === 'loading') media.setAttribute('aria-busy', 'true');
    else media.removeAttribute('aria-busy');
    updateGroup(media);
  };
  const removeButton = media => {
    const entry = buttons.get(media);
    entry?.remove();
    buttons.delete(media);
  };
  const actionButton = (media, label, action) => {
    removeButton(media);
    const host = media.closest('[data-media-group]') || media.parentElement;
    if (media.closest('[data-media-group]')) {
      host.querySelectorAll(':scope > .media-retry').forEach(button => button.remove());
    }
    if (getComputedStyle(host).position === 'static') host.style.position = 'relative';
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'media-retry';
    button.textContent = label;
    button.setAttribute('aria-label', `${label}: ${media.getAttribute('alt') || media.getAttribute('aria-label') || 'preview'}`);
    button.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      removeButton(media);
      action();
    }, { signal });
    host.append(button);
    buttons.set(media, button);
  };
  const loadDecodedImage = (src, fetchPriority = 'auto') => new Promise((resolve, reject) => {
    const loader = new Image();
    loader.decoding = 'async';
    loader.fetchPriority = fetchPriority;
    let complete = false;
    const finish = (error) => {
      if (complete) return;
      complete = true;
      clearTimeout(timeout);
      cancellations.delete(cancel);
      loader.onload = loader.onerror = null;
      if (error) { loader.removeAttribute('src'); reject(error); }
      else resolve();
    };
    const cancel = () => finish(new Error('cancelled'));
    const timeout = setTimeout(() => finish(new Error('timeout')), 20000);
    cancellations.add(cancel);
    loader.onload = async () => {
      try { await loader.decode(); } catch { /* A successfully loaded image remains usable. */ }
      finish(loader.naturalWidth ? null : new Error('empty image'));
    };
    loader.onerror = () => finish(new Error('image unavailable'));
    loader.src = src;
  });
  const failed = media => {
    if (signal.aborted) return;
    records.get(media).failed = true;
    state(media, 'error');
    actionButton(media, 'Try again', () => {
      const group = media.closest('[data-media-group]');
      records.forEach((record, item) => {
        if (!record.failed || (group ? item.closest('[data-media-group]') !== group : item !== media)) return;
        removeButton(item);
        record.failed = false;
        if (record.video) { record.started = false; requestVideo(item, true); }
        else { record.queued = false; requestImage(item); }
      });
    });
  };
  const syncPlayback = () => {
    const candidates = [...records].filter(([media, record]) => record.video && record.started && !record.failed && visible(media) && media.readyState >= 2 && media.dataset.mediaAutoplay === 'true');
    candidates.sort(([a], [b]) => priority(b) - priority(a));
    const playing = new Set(candidates.slice(0, 2).map(([media]) => media));
    records.forEach((record, media) => {
      if (!record.video || !record.started) return;
      if (playing.has(media) && (!conserveData || record.manual)) {
        media.play().catch(() => {
          if (!signal.aborted && media.paused) actionButton(media, 'Play preview', () => { record.manual = true; media.play().catch(() => failed(media)); });
        });
      } else media.pause();
    });
  };
  const requestImage = media => {
    const record = records.get(media);
    if (record.queued || signal.aborted) return;
    record.queued = true;
    state(media, 'loading');
    enqueue(async () => {
      try {
        await loadDecodedImage(media.dataset.mediaSrc, media.fetchPriority);
        if (signal.aborted) return;
        media.src = media.dataset.mediaSrc;
        state(media, 'ready');
        removeButton(media);
      } catch { failed(media); }
    }, { priority: () => priority(media) });
  };
  const requestPoster = media => {
    const record = records.get(media);
    if (record.posterQueued || !media.dataset.mediaPoster) return;
    record.posterQueued = true;
    enqueue(async () => {
      try {
        await loadDecodedImage(media.dataset.mediaPoster, visible(media) ? 'high' : 'low');
        if (signal.aborted) return;
        media.poster = media.dataset.mediaPoster;
        media.dataset.mediaPosterReady = 'true';
        if (media.dataset.mediaState !== 'ready' && !record.failed) state(media, 'poster');
      } catch { /* A missing poster must not prevent video playback. */ }
      finally {
        record.posterComplete = true;
        if (!signal.aborted && record.near) requestVideo(media);
      }
    }, { priority: () => priority(media) + 10 });
  };
  const requestVideo = (media, manual = false) => {
    const record = records.get(media);
    record.manual ||= manual;
    if (record.started || signal.aborted || record.failed) return;
    if (conserveData && !record.manual) {
      actionButton(media, 'Play preview', () => requestVideo(media, true));
      return;
    }
    // Give the lightweight poster first claim on the connection.
    if (media.dataset.mediaPoster && !record.posterComplete) { requestPoster(media); return; }
    record.started = true;
    enqueue(() => new Promise(resolve => {
      if (!record.near && !record.manual) { record.started = false; resolve(); return; }
      let done = false;
      const finish = success => {
        if (done) return;
        done = true;
        clearTimeout(timeout);
        cancellations.delete(cancel);
        media.removeEventListener('loadeddata', loaded);
        media.removeEventListener('error', errored);
        if (!signal.aborted) {
          if (success) { record.failed = false; state(media, 'ready'); removeButton(media); syncPlayback(); }
          else { media.pause(); media.removeAttribute('src'); media.load(); failed(media); }
        }
        resolve();
      };
      const loaded = () => finish(true);
      const errored = () => finish(false);
      const cancel = () => finish(false);
      const timeout = setTimeout(() => finish(false), 25000);
      cancellations.add(cancel);
      media.addEventListener('loadeddata', loaded);
      media.addEventListener('error', errored);
      media.preload = 'auto';
      media.src = media.dataset.mediaSrc;
      media.load();
    }), { video: true, priority: () => priority(media) - 5 });
  };
  const nearbyObserver = new IntersectionObserver(entries => {
    entries.forEach(({ target: media, isIntersecting }) => {
      if (!isIntersecting) return;
      nearbyObserver.unobserve(media);
      if (records.get(media).video) requestPoster(media);
      else requestImage(media);
    });
  }, { rootMargin: '400px 0px' });
  const videoObserver = new IntersectionObserver(entries => {
    entries.forEach(({ target: media, isIntersecting }) => {
      records.get(media).near = isIntersecting;
      if (isIntersecting) requestVideo(media);
    });
    syncPlayback();
  }, { rootMargin: '100px 0px' });
  const playbackObserver = new IntersectionObserver(syncPlayback, { threshold: [0, .25, .5, .75, 1] });
  root.querySelectorAll('[data-media-state]').forEach(media => {
    const video = media.tagName === 'VIDEO';
    records.set(media, { video, queued: false, started: false, failed: false, near: false });
    if (video) {
      media.muted = true;
      media.defaultMuted = true;
      media.addEventListener('canplay', syncPlayback, { signal });
      media.addEventListener('error', () => {
        if (media.getAttribute('src') && !records.get(media).failed) failed(media);
      }, { signal });
      media.addEventListener('waiting', () => {
        // Keep an already displayed frame while buffering; no new skeleton.
        if (media.dataset.mediaPosterReady && media.readyState < 2) state(media, 'poster');
      }, { signal });
      media.addEventListener('playing', () => { state(media, 'ready'); removeButton(media); }, { signal });
      videoObserver.observe(media);
      playbackObserver.observe(media);
    }
    nearbyObserver.observe(media);
    // Begin visible content without waiting for the first observer delivery.
    if (visible(media)) {
      if (video) { records.get(media).near = true; requestPoster(media); if (!media.dataset.mediaPoster) requestVideo(media); }
      else requestImage(media);
    }
  });
  document.addEventListener('visibilitychange', syncPlayback, { signal });
  dispose = () => {
    controller.abort();
    nearbyObserver.disconnect();
    videoObserver.disconnect();
    playbackObserver.disconnect();
    cancellations.forEach(cancel => cancel());
    buttons.forEach(button => button.remove());
    records.forEach((record, media) => {
      if (!record.video) return;
      media.pause();
      media.removeAttribute('src');
      media.load();
    });
  };
}
