document.addEventListener('DOMContentLoaded', function () {
    const body = document.querySelector('body');
let lockPadding = document.querySelectorAll(".lock-padding");
let unlock = true;
const timeout = 300;


function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }

    body.style.paddingRight = lockPaddingValue;
    body.classList.add('_lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function () {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('_lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout)
}

document.addEventListener("click", documentActions);

function documentActions(e) {
    const targetElement = e.target;

    // SIDEBAR TOGGLE ACTION START
    if (document.querySelector('.sidebar__toggle')) {
        if (targetElement.classList.contains('sidebar__toggle') || targetElement.closest('.sidebar__toggle')) {
            e.preventDefault();
            document.querySelector('.wrapper').classList.toggle('_hide-sidebar');
        }
    }
    // SIDEBAR TOGGLE ACTION END

    // HEADER BURGER TOGGLE ACTION START
    if (document.querySelector('.header__burger')) {
        if (targetElement.classList.contains('header__burger') || targetElement.closest('.header__burger')) {
            e.preventDefault();
            if (unlock) {
                if (document.querySelector('.header__burger').classList.contains('_active')) {
                    document.querySelector('.header__burger').classList.remove('_active');
                    document.querySelector('.sidebar').classList.remove('_active');
                    bodyUnLock();
                } else {
                    document.querySelector('.header__burger').classList.add('_active');
                    document.querySelector('.sidebar').classList.add('_active');
                    bodyLock();
                }
            }
        }
    }
    // HEADER BURGER TOGGLE ACTION END

    // MOBILE FILTER TOGGLE ACTION START
    if (document.querySelector('.filter')) {
        if (targetElement.classList.contains('filter__btn') || targetElement.closest('.filter__btn')) {
            e.preventDefault();
            document.querySelector('.filter').classList.toggle('_active');
        } else {
            for (let index = 0; index < document.querySelectorAll('.filter').length; index++) {
                const element = document.querySelectorAll('.filter')[index];
                element.classList.remove('_active');
            }
        }
    }
    // MOBILE FILTER TOGGLE ACTION END

    // ACCORDION ACTION START
    if (document.querySelector('.accordion')) {
        if (targetElement.classList.contains('accordion__button') || targetElement.closest('.accordion__button')) {
            e.preventDefault();
            targetElement.closest('.accordion__item').classList.toggle('_active');
        }
    }
    // ACCORDION ACTION END
}
const eventsSlider = document.querySelectorAll('.recent-events__swiper .swiper');

if (eventsSlider.length > 0) {
    new Swiper('.recent-events__swiper .swiper', {
        slidesPerView: 1.5,
        spaceBetween: 15,
        watchOverflow: true,

        navigation: {
            prevEl: '.recent-events__swiper .swiper__button-prev',
            nextEl: '.recent-events__swiper .swiper__button-next',
        },

        on: {
            lock: function () {
                this.el.classList.add('_lock');
            },

            init: function() {
                this.el.classList.add('_init');
            }
        },

        breakpoints: {
            450: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1920: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            2560: {
                slidesPerView: 5,
                spaceBetween: 40,
            },
        },
    })
}
/* */
;
})