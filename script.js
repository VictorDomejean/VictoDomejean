// Gestion clique sur une image

const imgs = document.querySelectorAll('.grid-wrapper div img');
const imgDivs = document.querySelectorAll('.grid-wrapper div');
const fullimage = document.querySelector('#fullimage');
const imagebackground = document.querySelector('#imagebackground');

imgs.forEach(img => {
  img.addEventListener('click', function() {
    fullimage.style.backgroundImage = 'url(' + img.src + ')';
    fullimage.style.display = 'block';
    imagebackground.style.display = 'block';
  });
});

fullimage.addEventListener('click', function() {
    fullimage.style.display = 'none';
    imagebackground.style.display = 'none';
});


// gestion filtre sur les images
const swicthbox = document.querySelector('#switch-checkbox');

swicthbox.onclick = function(){
    if (swicthbox.checked)
        {
            imgDivs.forEach(div => {
                div.style.filter = 'grayscale(0%)'
            })
        }
    else{
        imgDivs.forEach(div => {
            div.style.filter = 'grayscale(100%)'     
        })
    }
};