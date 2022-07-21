const burger = document.queryby("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", () => {
	menu.classList.toggle("disp")
});