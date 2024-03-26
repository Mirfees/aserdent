document.addEventListener('DOMContentLoaded', function () {
    let burgerMenu = document.getElementById('burger-menu');
    let overlay = document.querySelector('.header-menu');
    burgerMenu.addEventListener('click',function(){
        this.classList.toggle("close");
        overlay.classList.toggle("overlay");
    });

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
        spaceBetween: 20,

        pagination: {
            el: '.slider-dentists__pagination',
        },
    });

    const sliderFeedback = new Swiper('.feedback__swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,

        pagination: {
            el: '.feedback__pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.feedback__next',
            prevEl: '.feedback__prev',
        },
    });

    //end SLIDERS


});