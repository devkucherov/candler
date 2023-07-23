function mobileNav() {
	// Mobile nav button
	const menuBtn = document.querySelector('.menu__btn');
	const menu = document.querySelector('.header__menu-list');


	menuBtn.onclick = function () {
		menu.classList.toggle('menu--open');
	};
}

export default mobileNav;