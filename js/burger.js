const menu = document.querySelector('.menu__body')
const menuBtn = document.querySelector('.menu__icon')
const header = document.querySelector('.header')
const vid = document.querySelector('.navbar .video');

const body = document.body;

window.addEventListener('scroll', function(){
	var scroll = window.pageYOffset || document.documentElement.scrollTop,
    height = scroll < 800 ? 1500 - Math.floor(scroll / 4 * 3) : 650;
	if(height >= 1500){
		header.classList.remove('scroll');
		vid.style.display = "none";

	}
	if(height <1500){
		header.classList.add('scroll');
		vid.style.display = "";
	}
});

if (menu && menuBtn) {
	menuBtn.addEventListener('click', e => {
		menu.classList.toggle('active')
		menuBtn.classList.toggle('active')
		body.classList.toggle('lock')
	})

	menu.addEventListener('click', e => {
		if (e.target.classList.contains('menu__body')) {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		}
	})

	menu.querySelectorAll('.menu__link').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		})
	})
}

/*===========================================*/