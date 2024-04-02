document.addEventListener('DOMContentLoaded', function () {
    //begin BURGER-MENU
    let burgerMenu = document.getElementById('burger-menu');
    let overlay = document.querySelector('.header-menu');
    burgerMenu.addEventListener('click',function(){
        this.classList.toggle("close");
        overlay.classList.toggle("overlay");
    });
    //end BURGER-MENU

    //begin DROPDOWN
    delegate(document, '.header-menu__dropdown, html', 'click', function(e){
        if (this.closest('.dropdown-menu')) {
            let dropdown = this.closest('.dropdown-menu').querySelector('.dropdown-menu__list');
            let cl = dropdown.classList;
            let animation = dropdown.animate([
                { opacity: 1 },
                { opacity: 0 }
            ], { duration: 100 });

            if(cl.contains('active')){
                animation.addEventListener('finish', function(){
                    cl.remove('active');
                });
            }
            else{
                cl.add('active');
                dropdown.animate([
                    { opacity: 0 },
                    { opacity: 1 }
                ], { duration: 100 });
            }
        } else {
            let dropdownLists = document.querySelectorAll('.dropdown-menu__list');
            dropdownLists.forEach(dropdownList => {
                let cl = dropdownList.classList;
                let animation = dropdownList.animate([
                    { opacity: 1 },
                    { opacity: 0 }
                ], { duration: 100 });

                if(cl.contains('active')){
                    animation.addEventListener('finish', function(){
                        cl.remove('active');
                    });
                }
            });
        }
    });
    //end DROPDOWN

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

    //begin input-file
    document.querySelector('.input-file input[type=file]').addEventListener('change', function() {
        let file = this.files[0];
        let label = this.closest('.input-file');
        let button = label.querySelector('.button_color_viola');
        button.innerHTML = file.name;
    });
    //end input-file

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

    //begin PHONE MASK
    phoneMatrix('[type="tel"]', '+7 (___) ___ __ __');
    //end PHONE MASK
});

//begin CUSTOM FUNCTIONS
function delegate(box, selector, eventName, handler){
    box.addEventListener(eventName, function(e){
        let elem = e.target.closest(selector);

        if(elem !== null && box.contains(elem)){
            handler.call(elem, e);
        }
    });
}

function phoneMatrix(selector, matrix = '+7 (___) ___ __ __') {
    [].forEach.call( document.querySelectorAll(selector), function(input) {
        let keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            let pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            let i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) : a
                });
            i = new_value.indexOf("_");
            if (i !== -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            let reg = matrix.substring(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
                this.value = new_value;
            }
            if (event.type === "blur" && this.value.length < 5) {
                this.value = "";
            }
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false);

    });
}
//end CUSTOM FUNCTIONS