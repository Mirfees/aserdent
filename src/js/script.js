document.addEventListener('DOMContentLoaded', function () {
    //begin BURGER-MENU

    let burgerMenu = document.getElementById('burger-menu');
    let overlay = document.querySelector('.header-menu');
    burgerMenu.addEventListener('click',function(){
        this.classList.toggle("close");
        overlay.classList.toggle("overlay");
    });

    //end BURGER-MENU

    //begin TABS
    const pricesTabsContainer = document.querySelector('.prices__tabs-container');
    const tabTitleClass = 'prices__tab-title';
    const tabClass = 'prices__tab';
    if (pricesTabsContainer) {
        pricesTabsContainer.addEventListener('click', (e) => {
            let target = e.target;

            if(target.closest(`.${tabTitleClass}`)) {
                let tabTitle = (target.closest(`.${tabTitleClass}`));
                let tabTitles = pricesTabsContainer.querySelectorAll(`.${tabTitleClass}`);
                let tabId = tabTitle.dataset.tabId;
                let tab = pricesTabsContainer.querySelector('#' + tabId);
                let tabs = pricesTabsContainer.querySelectorAll(`.${tabClass}`);

                tabTitles.forEach(title => {
                    title.classList.remove('active');
                });

                tabs.forEach(tab => {
                    tab.classList.remove('active');

                    if (tab.id === tabId) {
                        tab.classList.add('active');
                    }
                });

                tabTitle.classList.add('active');
            }
        });
    }

    //end TABS

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
        autoplay: true,

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

    const sliderFeedback = new Swiper('.slider-feedback__swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,

        pagination: {
            el: '.slider-feedback__pagination',
        },

        navigation: {
            nextEl: '.slider-feedback__next',
            prevEl: '.slider-feedback__prev',
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

    const sliderLicense = new Swiper('.slider-license .swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,

        navigation: {
            nextEl: '.slider-license .swiper-button-next',
            prevEl: '.slider-license .swiper-button-prev',
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

    const sliderPosts = new Swiper('.slider-posts .swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,

        navigation: {
            nextEl: '.slider-posts .swiper-button-next',
            prevEl: '.slider-posts .swiper-button-prev',
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

    //end SLIDERS

    //begin FANCYBOX

    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });

    //end FANCYBOX

});