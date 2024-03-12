document.addEventListener('DOMContentLoaded', function () {

    //begin SLIDERS

    const mainPageSlider = new Swiper('.main-page-slider__swiper', {
        direction: 'horizontal',
        loop: true,

        pagination: {
            el: '.main-page-slider__pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.main-page-slider__next',
            prevEl: '.main-page-slider__prev',
        },
    });

    const sliderDentists = new Swiper('.slider-dentists__swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 2,

        pagination: {
            el: '.slider-dentists__pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.slider-dentists__next',
            prevEl: '.slider-dentists__prev',
        },
    });

    //end SLIDERS
});