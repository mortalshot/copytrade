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