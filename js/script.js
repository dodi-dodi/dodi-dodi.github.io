function toggleFlex(element) {
    if (getComputedStyle(element).display === 'none') {
        element.style.display = 'flex';
    } else {
        element.style.display = null;
    }
}

$(function () {
    let menu = document.querySelector("#main-menu");
    let navbarMobileMenuButton = document.querySelector('#menu-icon');
    navbarMobileMenuButton.addEventListener('click', () => toggleFlex(menu));

    $('.menu-item').on('click', function () {
        let target = $("#" + $(this).data('target'));
        $(window).scrollTo(target, 500, {offset: {top: -96}});
        toggleFlex(menu);
    });
});
