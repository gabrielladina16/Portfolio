"""Composite the original screenshot onto the tablet without generating screen content."""
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "src/assets"
base = Image.open(ASSETS / "typelab-final-mockup-expanded.png").convert("RGB")

# Clone a clean neighbouring section of the pencil along its barrel axis.
clean_barrel = base.transform(base.size, Image.Transform.AFFINE,
                              (1, 0, 40, 0, 1, -9), Image.Resampling.BICUBIC)
letter_mask = Image.new("L", base.size)
ImageDraw.Draw(letter_mask).polygon([(1094, 758), (1108, 754),
                                    (1117, 773), (1103, 778)], fill=255)
base = Image.composite(clean_barrel, base, letter_mask.filter(ImageFilter.GaussianBlur(2)))

# Work at twice the photo resolution for crisp perspective resampling.
scale = 2
base = base.resize((base.width * scale, base.height * scale), Image.Resampling.LANCZOS)
screen = Image.open(ASSETS / "typelab-final-screen-original.png").convert("RGB")
# Remove the iPad status bar, preserving every pixel of the app beneath it.
screen = screen.crop((0, round(screen.width * .025), screen.width, screen.height))

destination = np.array([(332, 403), (1005, 139), (1348, 558), (608, 857)], dtype=float) * scale
source = [(0, 0), (screen.width, 0), (screen.width, screen.height), (0, screen.height)]
matrix, values = [], []
for (x, y), (u, v) in zip(destination, source):
    matrix.extend([[x, y, 1, 0, 0, 0, -u*x, -u*y],
                   [0, 0, 0, x, y, 1, -v*x, -v*y]])
    values.extend([u, v])
coefficients = np.linalg.solve(np.array(matrix), np.array(values))

mask = Image.new("L", screen.size)
ImageDraw.Draw(mask).rounded_rectangle((0, 0, screen.width-1, screen.height-1), radius=40, fill=255)
warped = screen.transform(base.size, Image.Transform.PERSPECTIVE, coefficients, Image.Resampling.BICUBIC)
warped_mask = mask.transform(base.size, Image.Transform.PERSPECTIVE, coefficients, Image.Resampling.BICUBIC)
Image.composite(warped, base, warped_mask).save(ASSETS / "typelab-final-mockup-composited.png", optimize=True)
