// Prioritize visible media while keeping video startup from blocking posters.
export function createMediaQueue(signal, limit = 3, videoLimit = 1) {
  const pending = [];
  let active = 0;
  let activeVideos = 0;
  const pump = () => {
    if (signal.aborted) return;
    pending.sort((a, b) => b.priority() - a.priority());
    while (active < limit) {
      const index = pending.findIndex(job => !job.video || activeVideos < videoLimit);
      if (index < 0) break;
      const job = pending.splice(index, 1)[0];
      active += 1;
      if (job.video) activeVideos += 1;
      Promise.resolve().then(() => signal.aborted ? undefined : job.run()).catch(() => {}).finally(() => {
        active -= 1;
        if (job.video) activeVideos -= 1;
        pump();
      });
    }
  };
  signal.addEventListener('abort', () => { pending.length = 0; }, { once: true });
  return (run, { video = false, priority = () => 0 } = {}) => {
    if (signal.aborted) return;
    pending.push({ run, video, priority });
    pump();
  };
}
