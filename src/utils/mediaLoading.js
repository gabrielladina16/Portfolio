import metadata from "../data/mediaMetadata.json";

const assetUrls = import.meta.glob("../assets/**/*.{png,jpg,jpeg,webp,gif,mp4}", {
  eager: true, query: "?url", import: "default",
});
const assets = new Map(Object.entries(assetUrls).map(([path, url]) => [path.replace("../assets/", ""), url]));
const dimensions = new Map([...assets].map(([name, url]) => [url, metadata[name]]));
let dispose;

// Prepare inert markup before it reaches the document, so offscreen sources cannot
// start downloading ahead of the observer. Keep the original element structure.
export function prepareMedia(markup) {
  const template = document.createElement("template");
  template.innerHTML = markup;
  template.content.querySelectorAll("img[src], video").forEach(media => {
    const video = media.tagName === "VIDEO";
    const src = media.getAttribute("src") || media.querySelector("source[src]")?.getAttribute("src");
    if (!src) return;
    const size = dimensions.get(src);
    if (size && !media.hasAttribute("width") && !media.hasAttribute("height")) {
      media.setAttribute("width", size.width);
      media.setAttribute("height", size.height);
    }
    media.dataset.mediaState = "loading";
    media.setAttribute("aria-busy", "true");
    if (media.hasAttribute("src")) {
      media.dataset.mediaSrc = media.getAttribute("src");
      media.removeAttribute("src");
    }
    if (video) {
      media.dataset.mediaAutoplay = String(media.autoplay);
      media.removeAttribute("autoplay");
      media.preload = "none";
      const poster = (size?.poster && assets.get(size.poster)) || media.getAttribute("poster");
      if (poster) media.dataset.mediaPoster = poster;
      media.removeAttribute("poster");
      media.dataset.mediaSrc = src;
      media.querySelectorAll("source").forEach(source => source.remove());
    } else {
      media.decoding = "async";
      media.loading = "eager"; // The observer controls when the source is assigned.
    }
  });
  return template.content;
}

export function initMediaLoading(root) {
  dispose?.();
  const controller = new AbortController();
  const { signal } = controller;
  const ready = media => {
    media.dataset.mediaState = "ready";
    media.removeAttribute("aria-busy");
  };
  const failed = media => {
    if (media.dataset.mediaSrc) return;
    media.dataset.mediaState = "error";
    media.removeAttribute("aria-busy");
    // Keep the poster or native alt text instead of an endless skeleton.
  };
  const isVisible = media => {
    const rect = media.getBoundingClientRect();
    return !document.hidden && rect.bottom > 0 && rect.top < window.innerHeight && rect.right > 0 && rect.left < window.innerWidth;
  };
  const syncPlayback = video => {
    if (video.dataset.mediaAutoplay !== "true") return;
    if (isVisible(video) && video.readyState >= 2) video.play().catch(() => {});
    else video.pause();
  };
  const playbackObserver = new IntersectionObserver(entries => {
    entries.forEach(({ target }) => syncPlayback(target));
  });
  const observer = new IntersectionObserver(entries => {
    entries.forEach(({ target: media, isIntersecting }) => {
      if (!isIntersecting) return;
      observer.unobserve(media);
      if (media.tagName === "VIDEO") {
        if (media.dataset.mediaPoster) media.poster = media.dataset.mediaPoster;
        media.preload = "auto";
        if (media.dataset.mediaSrc) media.src = media.dataset.mediaSrc;
        media.load();
      } else {
        media.src = media.getAttribute("src") || media.dataset.mediaSrc;
      }
      delete media.dataset.mediaSrc;
    });
  }, { rootMargin: "400px 0px" });

  root.querySelectorAll("[data-media-state]").forEach(media => {
    media.addEventListener("error", () => failed(media), { signal });
    if (media.tagName === "VIDEO") {
      media.muted = true;
      media.defaultMuted = true;
      media.addEventListener("loadeddata", () => { ready(media); syncPlayback(media); }, { signal });
      media.addEventListener("canplay", () => syncPlayback(media), { signal });
      playbackObserver.observe(media);
    } else {
      media.addEventListener("load", async () => {
        const src = media.currentSrc;
        try { await media.decode(); } catch { /* A loaded image can still be drawn after decode rejects. */ }
        if (!signal.aborted && media.currentSrc === src && media.naturalWidth > 0) ready(media);
      }, { signal });
    }
    observer.observe(media);
  });
  document.addEventListener("visibilitychange", () => root.querySelectorAll("video").forEach(syncPlayback), { signal });
  dispose = () => {
    controller.abort();
    observer.disconnect();
    playbackObserver.disconnect();
    root.querySelectorAll("video").forEach(video => {
      video.pause();
      video.removeAttribute("src");
      video.querySelectorAll("source").forEach(source => source.removeAttribute("src"));
      video.load();
    });
  };
}
