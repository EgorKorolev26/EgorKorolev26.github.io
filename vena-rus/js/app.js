const prew = document.getElementById('prew');
const next = document.getElementById('next');
const sliderImages = document.getElementById('slider-images');






const info = document.getElementById('info-icon');
let popUp = document.getElementById('pop-up');


info.addEventListener('click', function () {
	popUp.classList.toggle('disp');
});




/* BURGER */

/* const menuOpen = document.getElementById('burger-open');
const menu = document.getElementById('menu');
const menuClose = document.getElementById('menu-close');

menuOpen.addEventListener('click', function () {
	menu.classList.toggle('disp');
});
menuClose.addEventListener('click', function () {

	menu.classList.toggle('disp');

}); */

document.getElementById('burger-open').addEventListener('click', () => {
	document.getElementById('menu').classList.add('active');
	document.getElementById('menu-close').classList.add('close-menu-active');
})
document.getElementById('menu-close').addEventListener('click', () => {
	document.getElementById('menu').classList.remove('active');
	document.getElementById('menu-close').classList.remove('close-menu-active')
})
