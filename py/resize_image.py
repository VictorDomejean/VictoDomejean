from PIL import Image
import os

quality = 25

input_image = input('Link to img : ')
dir = os.path.dirname(input_image)

try :  
    filename = os.path.splitext(os.path.basename(input_image))[0]
    output_path = os.path.join(dir, f'{quality}'  + "_" + filename + '.jpg')
    im = Image.open(input_image)
    im.save(output_path, format='JPEG', quality=quality)
except Exception as e : 
    print(e)