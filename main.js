const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const main = document.querySelector('main');

burger.addEventListener('click', () => {
	burger.classList.toggle('active');
	nav.classList.toggle('active');

	if (burger.classList.contains('active')) {
		main.style.zIndex = -10;
	} else {
		main.style.zIndex = 0;
	};
});