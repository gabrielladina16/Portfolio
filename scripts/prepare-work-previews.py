"""Build lightweight Work thumbnails without replacing detail-page originals."""
import json
from pathlib import Path
from PIL import Image
ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / 'src/assets'
DEST = ASSETS / 'previews'
DEST.mkdir(exist_ok=True)
metadata_path = ROOT / 'src/data/mediaMetadata.json'
metadata = json.loads(metadata_path.read_text())
variants = {}
names = ['high-hopes-homepage-left.png', 'high-hopes-homepage-right.png', 'sustainopia-cover.png', 'grab-card-1.png', 'grab-card-2.png', 'brewtime-recipe-bottom-reference.png', 'brewtime-final-wallpaper.jpg']
for name in names:
    image = Image.open(ASSETS / name)
    image.thumbnail((1280, 1280), Image.Resampling.LANCZOS)
    target = DEST / (Path(name).stem + '.webp')
    image.save(target, 'WEBP', quality=84, method=6)
    relative = target.relative_to(ASSETS).as_posix()
    metadata[relative] = {'width': image.width, 'height': image.height}
    variants[name] = relative
    print(f'{name}: {(ASSETS / name).stat().st_size // 1024} KB -> {target.stat().st_size // 1024} KB')
(ROOT / 'src/data/workPreviewVariants.json').write_text(json.dumps(variants, indent=2) + '\n')
metadata_path.write_text(json.dumps(metadata, indent=2) + '\n')
