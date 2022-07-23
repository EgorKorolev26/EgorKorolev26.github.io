
(function () {
	const burger = document.querySelector('.burger');
	burger.addEventListener('click', () => {
		burger.classList.toggle('burger_active');
	});
	const menu = document.querySelector("#menu");

	burger.addEventListener("click", () => {
		menu.classList.toggle("disp")
	});

}());
