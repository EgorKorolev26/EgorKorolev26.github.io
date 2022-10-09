const prew = document.getElementById('prew');
const next = document.getElementById('next');
const sliderImages = document.getElementById('slider-images');

prew.addEventListener('click', function () {
	for (let item of sliderImages) {
		item.classList.toggle('red');
	}
});





const info = document.getElementById('info-icon');
let popUp = document.getElementById('pop-up');


info.addEventListener('click', function () {
	popUp.classList.toggle('disp');
});

