// Слайдер "Руководство" - НАЧАЛО
const sliderManagement = new Swiper(".slider-management-image .swiper", {
	slidesPerView: 1,
	spaceBetween: 0,
	effect: "slide",
	loop: true,
	simulateTouch: true,
	navigation: {
		nextEl: ".slider-management-next",
		prevEl: ".slider-management-prev",
	},
	pagination: {
		el: ".slider-management-pagination",
		clickable: true,
	},
	speed: 1000,
});

// Переключение текста при изменении слайда
sliderManagement.on('slideChange', function () {
	let activeIndex = sliderManagement.realIndex;
	let texts = document.querySelectorAll('.management-text');

	// Скрываем все тексты
	texts.forEach(function(text) {
		text.classList.remove('active');
	});

	// Показываем активный текст
	texts[activeIndex].classList.add('active');
});

// Устанавливаем первый текст активным при загрузке
document.addEventListener('DOMContentLoaded', function () {
	let firstText = document.querySelector('.management-text');
	firstText.classList.add('active');
});
// Слайдер "Руководство" - КОНЕЦ


//Подключение кастомного скролла при ширине экрана больше 991 пикселя
if ($(window).width() > 991) {
    (function ($) {
        $(window).on("load", function () {
            $(".text-content-scroll").mCustomScrollbar({
                theme: 'dark',
                scrollInertia: "300",
                advanced: {
                    updateOnContentResize: "true",
                },
            });
        });
    })(jQuery);
};
