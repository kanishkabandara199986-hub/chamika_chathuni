from PIL import Image, ImageOps
import os

input_path = r"G:\Projects\Chamika and chathuni\public\assets\images\couple_art.png"
output_path = r"G:\Projects\Chamika and chathuni\public\assets\images\og_image.jpg"

try:
    with Image.open(input_path) as img:
        # Convert to RGBA first to handle transparency properly
        img = img.convert("RGBA")
        
        # WhatsApp prefers square images for thumbnails, or 1.91:1 for large previews.
        # Given it's a portrait image, a 800x800 square with padding is safest to prevent cropping.
        target_size = (800, 800)
        
        # Create a new background image with Ivory color to match the theme
        bg_color = (253, 251, 247) # Ivory background
        new_img = Image.new("RGB", target_size, bg_color)
        
        # Calculate resize ratio to fit entirely inside target_size
        ratio = min(target_size[0] / img.width, target_size[1] / img.height)
        new_size = (int(img.width * ratio), int(img.height * ratio))
        
        # Resize image using LANCZOS
        resized_img = img.resize(new_size, Image.Resampling.LANCZOS)
        
        # Calculate position to paste (center)
        paste_x = (target_size[0] - new_size[0]) // 2
        paste_y = (target_size[1] - new_size[1]) // 2
        
        # Paste using the alpha channel as a mask
        new_img.paste(resized_img, (paste_x, paste_y), mask=resized_img.split()[3])
        
        # Save as JPG
        new_img.save(output_path, "JPEG", quality=90)
        print(f"Saved {output_path} with size {os.path.getsize(output_path)/1024:.2f} KB")
except Exception as e:
    print(f"Error: {e}")
