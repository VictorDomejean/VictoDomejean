const imgs = document.querySelectorAll('.grid-wrapper div img');
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
