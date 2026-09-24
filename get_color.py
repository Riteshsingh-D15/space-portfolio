from PIL import Image

def get_dominant_color(image_path):
    img = Image.open(image_path)
    # Convert image to RGB
    img = img.convert('RGB')
    
    # Get the color of the center pixel
    width, height = img.size
    center_pixel = img.getpixel((width // 2, height // 2))
    
    # Convert RGB to Hex
    hex_color = '#{:02x}{:02x}{:02x}'.format(center_pixel[0], center_pixel[1], center_pixel[2])
    print(f"Center pixel color: {hex_color}")
    
    # Also check average color to be safe
    # Resize to 1x1 to get average
    img_1x1 = img.resize((1, 1))
    avg_pixel = img_1x1.getpixel((0, 0))
    avg_hex = '#{:02x}{:02x}{:02x}'.format(avg_pixel[0], avg_pixel[1], avg_pixel[2])
    print(f"Average color: {avg_hex}")

get_dominant_color(r'C:/Users/Ritesh/.gemini/antigravity/brain/cb8815ee-3d2b-4c7b-84fa-fe3c19cddca0/.user_uploaded/media_1789983109859.png')
