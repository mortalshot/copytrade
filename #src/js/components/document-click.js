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