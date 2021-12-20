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

    // CUSTOM-SELECT START
    if (document.querySelector('.custom-select')) {
        if (targetElement.classList.contains('custom-select__link') || targetElement.closest('.custom-select__link')) {
            e.preventDefault();
            targetElement.closest('.custom-select').classList.toggle('_active');
        } else if (targetElement.closest('.custom-select__list')) {
            targetElement.closest('.custom-select').classList.add('_active');
        } else {
            document.querySelector('.custom-select').classList.remove('_active');
        }
    }
    // CUSTOM-SELECT END

    // NOTIFICATION START
    if (document.querySelector('.notification')) {
        if (targetElement.classList.contains('notification__link') || targetElement.closest('.notification')) {
            e.preventDefault();
            targetElement.closest('.notification').classList.toggle('_active');
        } else {
            document.querySelector('.notification').classList.remove('_active');
        }
    }
    // NOTIFICATION END
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
// LICENSE-CARD HEADER HEIGHT START
let licenseCardHeading = document.querySelectorAll('.license-card__heading');

if (licenseCardHeading.length > 0) {
    let heightAttr = 0;

    for (let index = 0; index < licenseCardHeading.length; index++) {
        const element = licenseCardHeading[index];

        if (heightAttr < element.clientHeight) {
            heightAttr = element.clientHeight;
        }
        
        element.style.height = heightAttr + 'px';
    }
}
// LICENSE-CARD HEADER HEIGHT END

//Select
let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
	selects_init();
}
function selects_init() {
	for (let index = 0; index < selects.length; index++) {
		const select = selects[index];
		select_init(select);
	}
	//select_callback();
	document.addEventListener('click', function (e) {
		selects_close(e);
	});
	document.addEventListener('keydown', function (e) {
		if (e.which == 27) {
			selects_close(e);
		}
	});
}
function selects_close(e) {
	const selects = document.querySelectorAll('.select');
	if (!e.target.closest('.select')) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			select.classList.remove('_active');
			_slideUp(select_body_options, 100);
		}
	}
}
function select_init(select) {
	const select_parent = select.parentElement;
	const select_modifikator = select.getAttribute('class');
	const select_selected_option = select.querySelector('option:checked');
	select.setAttribute('data-default', select_selected_option.value);
	select.style.display = 'none';

	select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');

	let new_select = select.parentElement.querySelector('.select');
	new_select.appendChild(select);
	select_item(select);
}
function select_item(select) {
	const select_parent = select.parentElement;
	const select_items = select_parent.querySelector('.select__item');
	const select_options = select.querySelectorAll('option');
	const select_selected_option = select.querySelector('option:checked');
	const select_selected_text = select_selected_option.text;
	const select_type = select.getAttribute('data-type');

	if (select_items) {
		select_items.remove();
	}

	let select_type_content = '';
	if (select_type == 'input') {
		select_type_content = '<div class="select__value"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
	} else {
		select_type_content = '<div class="select__value"><span>' + select_selected_text + '</span></div>';
	}

	select_parent.insertAdjacentHTML('beforeend',
		'<div class="select__item">' +
		'<div class="select__title">' + select_type_content + '</div>' +
		'<div class="select__options">' + select_get_options(select_options) + '</div>' +
		'</div></div>');

	select_actions(select, select_parent);
}
function select_actions(original, select) {
	const select_item = select.querySelector('.select__item');
	const select_body_options = select.querySelector('.select__options');
	const select_options = select.querySelectorAll('.select__option');
	const select_type = original.getAttribute('data-type');
	const select_input = select.querySelector('.select__input');

	select_item.addEventListener('click', function () {
		let selects = document.querySelectorAll('.select');
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			if (select != select_item.closest('.select')) {
				select.classList.remove('_active');
				_slideUp(select_body_options, 100);
			}
		}
		_slideToggle(select_body_options, 100);
		select.classList.toggle('_active');
	});

	for (let index = 0; index < select_options.length; index++) {
		const select_option = select_options[index];
		const select_option_value = select_option.getAttribute('data-value');
		const select_option_text = select_option.innerHTML;

		if (select_type == 'input') {
			select_input.addEventListener('keyup', select_search);
		} else {
			if (select_option.getAttribute('data-value') == original.value) {
				select_option.style.display = 'none';
			}
		}
		select_option.addEventListener('click', function () {
			for (let index = 0; index < select_options.length; index++) {
				const el = select_options[index];
				el.style.display = 'block';
			}
			if (select_type == 'input') {
				select_input.value = select_option_text;
				original.value = select_option_value;
			} else {
				select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
				original.value = select_option_value;
				select_option.style.display = 'none';
			}
		});
	}
}
function select_get_options(select_options) {
	if (select_options) {
		let select_options_content = '';
		for (let index = 0; index < select_options.length; index++) {
			const select_option = select_options[index];
			const select_option_value = select_option.value;
			if (select_option_value != '') {
				const select_option_text = select_option.text;
				select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
			}
		}
		return select_options_content;
	}
}
function select_search(e) {
	let select_block = e.target.closest('.select ').querySelector('.select__options');
	let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
	let select_search_text = e.target.value.toUpperCase();

	for (let i = 0; i < select_options.length; i++) {
		let select_option = select_options[i];
		let select_txt_value = select_option.textContent || select_option.innerText;
		if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
			select_option.style.display = "";
		} else {
			select_option.style.display = "none";
		}
	}
}
function selects_update_all() {
	let selects = document.querySelectorAll('select');
	if (selects) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			select_item(select);
		}
	}
}


let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}
let elementWrapper = document.querySelector('.notification__inner');
let elementList = document.querySelector('.notification__items');


if (elementWrapper) {
    let shadowTop = elementWrapper.querySelector('.shadow_top');
    let shadowBottom = elementWrapper.querySelector('.shadow_bottom');

    let contentScrollHeight = elementList.scrollHeight - elementWrapper.offsetHeight;

    if (contentScrollHeight <= 1) {
        shadowBottom.style.opacity = 0;
    }

    elementList.addEventListener('scroll', function (e) {
        let currentScroll = this.scrollTop / (contentScrollHeight);

        shadowTop.style.opacity = currentScroll;
        shadowBottom.style.opacity = 1 - currentScroll;
    })
}
/* */
;
})