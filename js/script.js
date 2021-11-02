// МЕНЮ-БУРГЕР

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');


function burgerRun() {
	burger.classList.toggle('_active');
	menu.classList.toggle('_active');
	document.body.classList.toggle('_lock');
}

burger.addEventListener("click", burgerRun);


// ОТСТУП РАСКРЫТОГО НА УСТРОЙСТВАХ < 900PX МЕНЮ ОТ ПЛАШКИ ШАПКИ

let headerWrapper = document.querySelector('.header__wrapper');

if ((document.documentElement.offsetWidth < 900) && (document.documentElement.offsetHeight < 300)) {
	menu.firstElementChild.style.paddingTop = headerWrapper.offsetHeight + 'px';
}