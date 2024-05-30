const header = document.querySelector('[data-header]');
if (header) {
    let lastScroll = 0;
    const defaultOffset = 50;
    const containHide = () => header.classList.contains('_hide');

    window.addEventListener('scroll', () => {
        if (scrollY > lastScroll && !containHide() && scrollY > defaultOffset) {
            header.classList.add('_hide');
        }
        else if (scrollY < lastScroll && containHide()) {
            header.classList.remove('_hide');
        }

        if (scrollY > 5) header.classList.add('_scroll');
            else header.classList.remove('_scroll');

        lastScroll = scrollY;
    });
}