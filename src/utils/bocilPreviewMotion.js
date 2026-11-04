// Camera positions follow the existing 8.67s recording, not a separate timer.
const cameraKeys = [
  [0, 1, 0, 0],
  [.35, 1, 0, 0],
  [1.05, 1.7, -.55, .36],
  [4.35, 1.7, -.55, .36],
  // Pan to the macOS window's left edge at the same zoom, then pull back.
  [5.2, 1.7, .22, .36],
  [7.05, 1.7, .22, .36],
  [8.15, 1, 0, 0],
  [8.67, 1, 0, 0],
];

export function bocilCameraAt(time) {
  const end = cameraKeys.findIndex(key => key[0] > time);
  if (end === 0 || end === -1) return cameraKeys[end === 0 ? 0 : cameraKeys.length - 1].slice(1);
  const from = cameraKeys[end - 1];
  const to = cameraKeys[end];
  const progress = (time - from[0]) / (to[0] - from[0]);
  const ease = progress * progress * (3 - 2 * progress);
  return from.slice(1).map((value, index) => value + (to[index + 1] - value) * ease);
}

export function initBocilPreviewMotion(signal) {
  const preview = document.querySelector('[data-bocil-preview-motion]');
  const video = preview?.querySelector('video');
  if (!video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const cover = preview.closest('.project-visual');
  const canvas = cover.querySelector('.bocil-motion-frame');
  const context = canvas?.getContext('2d');
  let frame;
  let lastFrameKey;
  const draw = time => {
    const [zoom, x, y] = bocilCameraAt(time);
    preview.style.setProperty('--bocil-camera-zoom', zoom.toFixed(5));
    preview.style.setProperty('--bocil-camera-x', `${(x * 100).toFixed(4)}%`);
    preview.style.setProperty('--bocil-camera-y', `${(y * 100).toFixed(4)}%`);
    // Rasterize the camera directly at display resolution. The canvas itself
    // never moves or scales, avoiding Safari's low-resolution transform cache.
    const width = cover.clientWidth;
    const height = cover.clientHeight;
    const ratio = window.devicePixelRatio || 1;
    const frameKey = `${time}:${width}:${height}:${ratio}`;
    if (context && width && height && video.readyState >= 2 && video.videoWidth && lastFrameKey !== frameKey) {
      const pixelWidth = Math.ceil(width * ratio);
      const pixelHeight = Math.ceil(height * ratio);
      if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
        canvas.width = pixelWidth;
        canvas.height = pixelHeight;
      }
      const baseWidth = width * .8;
      const baseHeight = baseWidth * video.videoHeight / video.videoWidth;
      const drawWidth = baseWidth * zoom;
      const drawHeight = baseHeight * zoom;
      const left = width / 2 + x * baseWidth - drawWidth / 2;
      const top = height / 2 + y * baseHeight - drawHeight / 2;
      const radius = 10 * zoom;
      try {
        context.setTransform(pixelWidth / width, 0, 0, pixelHeight / height, 0, 0);
        context.clearRect(0, 0, width, height);
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = 'high';
        context.save();
        context.beginPath();
        context.moveTo(left + radius, top);
        context.arcTo(left + drawWidth, top, left + drawWidth, top + drawHeight, radius);
        context.arcTo(left + drawWidth, top + drawHeight, left, top + drawHeight, radius);
        context.arcTo(left, top + drawHeight, left, top, radius);
        context.arcTo(left, top, left + drawWidth, top, radius);
        context.closePath();
        context.clip();
        context.drawImage(video, left, top, drawWidth, drawHeight);
        context.restore();
        cover.classList.add('has-motion-frame');
        lastFrameKey = frameKey;
      } catch {
        context.restore();
        cover.classList.remove('has-motion-frame');
      }
    }
  };
  const tick = () => {
    frame = undefined;
    if (signal.aborted) return;
    draw(video.currentTime);
    if (!video.paused && !video.ended) frame = requestAnimationFrame(tick);
  };
  const sync = () => draw(video.currentTime);
  const start = () => {
    if (!frame && !signal.aborted) frame = requestAnimationFrame(tick);
  };
  video.addEventListener('seeked', sync, { signal });
  video.addEventListener('loadeddata', sync, { signal });
  video.addEventListener('playing', start, { signal });
  window.addEventListener('resize', sync, { passive: true, signal });
  start();
  signal.addEventListener('abort', () => {
    cancelAnimationFrame(frame);
  }, { once: true });
  sync();
}
