const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", () => {
	menu.classList.toggle("disp")
});


const openPopUp = document.getElementById('open-pop-up');
const closePopUp = document.getElementById('pop-up-close');
const popUp = document.getElementById('pop-up');

openPopUp.addEventListener('click', function (e) {
	e.preventDefault();
	popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
	popUp.classList.remove('active');
})

