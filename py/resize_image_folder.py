from PIL import Image
import os
from datetime import datetime

quality = 25

input_articles_dir = os.path.join(os.getcwd(), "img", "articles", "100")
ouput_articles_dir = os.path.join(os.getcwd(), "img", "articles", str(quality))

now = datetime.now().strftime('%Y%m%d%H%M%S')

if not os.path.isdir(ouput_articles_dir):
    os.makedirs(ouput_articles_dir)
else : 
    ouput_articles_dir = os.path.join(ouput_articles_dir, now)
    os.makedirs(ouput_articles_dir)

index = 1

for image in os.listdir(input_articles_dir):

    input_path = os.path.join(input_articles_dir, image)
    filename = os.path.splitext(os.path.basename(input_path))[0]
    output_path = os.path.join(ouput_articles_dir, f'{index:03d}'  + "_" + filename + '.jpg')
    im = Image.open(input_path)
    im.save(output_path, format='JPEG', quality=quality)

    index +=1