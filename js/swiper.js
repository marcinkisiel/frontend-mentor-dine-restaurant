var eventSlider = new Swiper('.swiper-container', {
	loop: false,
});

const slide1 = document.querySelector('.event-slider__menu-item--1');
const slide2 = document.querySelector('.event-slider__menu-item--2');
const slide3 = document.querySelector('.event-slider__menu-item--3');

slide1.addEventListener('click', function () {
	goToSlide(0);
});
slide2.addEventListener('click', function () {
	goToSlide(1);
});
slide3.addEventListener('click', function () {
	goToSlide(2);
});

function goToSlide(number) {
	eventSlider.slideTo(number);
}
