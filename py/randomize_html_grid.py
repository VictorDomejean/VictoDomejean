import os
import random

quality = 25

input_dir = os.path.join(os.getcwd(), "img", "articles", str(quality))
output_dir = os.path.join(os.getcwd(), "py", "html")
output_html = os.path.join(output_dir, "html_artciles_q{}.txt".format(quality))

class_css_list = ["big", "tall", "wide", ""]

with open(output_html, 'w') as f:
    
    for image in os.listdir(input_dir):

        # class_css = random.choice(class_css_list)
        class_css = random.choices(class_css_list, weights=(10, 20, 20, 50), k=1)[0]
        
        input_path = os.path.join(input_dir, image)
        filename = os.path.splitext(os.path.basename(input_path))[0]

        html_article =  """<div class="{}">
        <img src="img/articles/{}/{}.jpg" alt="" />
    </div>
    """.format(class_css, quality, filename)

        f.write(html_article)

f.close()