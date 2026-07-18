import os
from PIL import Image, ImageDraw

def make_circle(img_path, out_path, sizes):
    img = Image.open(img_path).convert("RGBA")
    
    # Crop to square
    min_dim = min(img.size)
    left = (img.width - min_dim)/2
    top = (img.height - min_dim)/2
    img = img.crop((left, top, left+min_dim, top+min_dim))
    
    # Create mask
    mask = Image.new('L', img.size, 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, min_dim, min_dim), fill=255)
    
    # Apply mask
    out = Image.new('RGBA', img.size, (0,0,0,0))
    out.paste(img, (0,0), mask)
    
    for size in sizes:
        resized = out.resize((size, size), Image.Resampling.LANCZOS)
        if size == 32:
            resized.save(out_path.replace("favicon.png", "favicon-32x32.png"))
        elif size == 16:
            resized.save(out_path.replace("favicon.png", "favicon-16x16.png"))
        elif size == 180:
            resized.save(out_path.replace("favicon.png", "apple-touch-icon.png"))
            
    # Save ico (multiple sizes)
    icon_sizes = [(16,16), (32, 32), (48, 48), (64,64)]
    out.save(out_path.replace("favicon.png", "favicon.ico"), format='ICO', sizes=icon_sizes)

make_circle("public/logo.png", "public/favicon_extract/favicon.png", [16, 32, 180])
