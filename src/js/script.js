document.addEventListener('DOMContentLoaded', function () {
    //begin BURGER-MENU

    let burgerMenu = document.getElementById('burger-menu');
    let overlay = document.querySelector('.header-menu');
    burgerMenu.addEventListener('click',function(){
        this.classList.toggle("close");
        overlay.classList.toggle("overlay");
    });

    //end BURGER-MENU

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

        breakpoints: {
            576: {
                slidesPerView: 2,
            },

            0: {
                slidesPerView: 1,
            },
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

        navigation: {
            nextEl: '.feedback__next',
            prevEl: '.feedback__prev',
        },

        breakpoints: {
            1000: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },

            0: {
                slidesPerView: 1,
            },
        },
    });

    const sliderActions = new Swiper('.slider-actions__swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,

        navigation: {
            nextEl: '.slider-actions__next',
            prevEl: '.slider-actions__prev',
        },

        breakpoints: {
            1000: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },

            0: {
                slidesPerView: 1,
            },
        },
    });

    const sliderSpecialists = new Swiper('.slider-specialists .swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,

        navigation: {
            nextEl: '.slider-specialists .swiper-button-next',
            prevEl: '.slider-specialists .swiper-button-prev',
        },

        breakpoints: {

            1500: {
                slidesPerView: 4,
            },
            1000: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },

            0: {
                slidesPerView: 1,
            },
        },
    });

    //end SLIDERS

    //begin FANCYBOX

    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });

    //end FANCYBOX

});