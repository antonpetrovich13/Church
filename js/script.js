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

//ПОЯВЛЕНИЕ ПЛАШКИ ПРИ СКРОЛЛЕ
/*const head = document.querySelector('.header__wrapper');

if (document.documentElement.scrollTop > 100) {
	head.classList.add('_active')
}*/


function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();


//НАВИГАЦИЯ
const menuLinks = document.querySelectorAll(".nav__link[data-goto]");
if (menuLinks.length > 0) {
	menuLinks.forEach(function (menuLink) {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		let menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			let goToBlock = document.querySelector(menuLink.dataset.goto);
			let goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;

			if (burger.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				burger.classList.remove('_active');
				menu.classList.remove('_active');
			}

			window.scrollTo({
				top: goToBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}
