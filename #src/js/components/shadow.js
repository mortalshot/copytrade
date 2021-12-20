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