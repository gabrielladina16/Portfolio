"""Refresh image dimensions and lightweight first-frame video posters (sips/ffmpeg)."""
import json
import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / 'src/assets'
metadata = {}
for video in sorted(ASSETS.glob('*.mp4')):
    poster = ASSETS / 'posters' / (video.stem + '.jpg')
    poster.parent.mkdir(exist_ok=True)
    if not poster.exists() or poster.stat().st_mtime < video.stat().st_mtime:
        subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', str(video), '-frames:v', '1', '-vf', 'scale=min(1280\\,iw):-2', '-q:v', '4', str(poster)], check=True)
    info = json.loads(subprocess.check_output(['ffprobe', '-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height', '-of', 'json', str(video)]))['streams'][0]
    metadata[video.relative_to(ASSETS).as_posix()] = {'width': info['width'], 'height': info['height'], 'poster': poster.relative_to(ASSETS).as_posix()}
images = [p for p in sorted(ASSETS.rglob('*')) if p.suffix.lower() in {'.png', '.jpg', '.jpeg', '.webp', '.gif'}]
for image in images:
    output = subprocess.check_output(['sips', '-g', 'pixelWidth', '-g', 'pixelHeight', str(image)], text=True)
    width = re.search(r'pixelWidth: (\d+)', output)
    height = re.search(r'pixelHeight: (\d+)', output)
    if width and height:
        metadata[image.relative_to(ASSETS).as_posix()] = {'width': int(width[1]), 'height': int(height[1])}
(ROOT / 'src/data/mediaMetadata.json').write_text(json.dumps(metadata, indent=2) + '\n')
print(f'Prepared metadata for {len(metadata)} media assets.')
