var eventSlider = new Swiper('.swiper-container', {
	loop: false,
});

const menu1 = document.querySelector('.event-slider__menu-item--1');
const menu2 = document.querySelector('.event-slider__menu-item--2');
const menu3 = document.querySelector('.event-slider__menu-item--3');

const slide1 = document.querySelector('.event-slider__slide--1');
const slide2 = document.querySelector('.event-slider__slide--2');
const slide3 = document.querySelector('.event-slider__slide--3');

const slideActiveClass = 'swiper-slide-active';
const menuActiveClass = 'event-slider__menu-item--active';

function goToSlide(number) {
	eventSlider.slideTo(number);
}

menu1.addEventListener('click', function () {
	if (!slide1.classList.contains(slideActiveClass)) {
		menu1.classList.add(menuActiveClass);
		menu2.classList.remove(menuActiveClass);
		menu3.classList.remove(menuActiveClass);
		goToSlide(0);
	}
});

menu2.addEventListener('click', function () {
	if (!slide2.classList.contains(slideActiveClass)) {
		menu2.classList.add(menuActiveClass);
		menu1.classList.remove(menuActiveClass);
		menu3.classList.remove(menuActiveClass);
		goToSlide(1);
	}
});

menu3.addEventListener('click', function () {
	if (!slide3.classList.contains(slideActiveClass)) {
		menu3.classList.add(menuActiveClass);
		menu1.classList.remove(menuActiveClass);
		menu2.classList.remove(menuActiveClass);
		goToSlide(2);
	}
});
