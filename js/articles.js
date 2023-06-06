const imgs = document.querySelectorAll('.grid-wrapper div img');
const imgDivs = document.querySelectorAll('.grid-wrapper div');
const fullimage = document.querySelector('#fullimage');
const imagebackground = document.querySelector('#imagebackground');
const closeButton = document.querySelector('#close');
const swicthbox = document.querySelector('#switch-checkbox');

// Gestion clique sur une image
imgs.forEach(img => {
  img.addEventListener('click', function() {

    fullimage.style.backgroundImage = 'url(' + img.src + ')';
    fullimage.style.display = 'block';
    closeButton.style.display = 'block';
    imagebackground.style.display = 'block';
    if(swicthbox.checked){
        fullimage.style.filter = 'grayscale(0%)'
    }
    else{
        fullimage.style.filter = 'grayscale(100%)'
    };
  });
});

closeButton.addEventListener('click', function() {
    fullimage.style.display = 'none';
    imagebackground.style.display = 'none';
    closeButton.style.display = 'none';
});


// Gestion filtre sur les images

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