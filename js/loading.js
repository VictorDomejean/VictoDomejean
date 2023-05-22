// Gestion chargement_page
"use strict";
window.addEventListener('DOMContentLoaded', DOMContentLoaded, false);

function DOMContentLoaded(evt)
{
	let allImages = Array.from( document.querySelectorAll('img, #banner' ) );
	console.log(allImages)
	let numRemaining = allImages.length;
	console.log(numRemaining)
	// allImages.forEach(  img => img.onload = img.onerror = onImgDone );
	var count = 0
	allImages.forEach(  img => img.onload = imgDone(numRemaining));
	console.log(count)


	function imgDone(num){
		var loaded = count+=1
		if(num==loaded){
			console.log('finish')
		}

	}
}