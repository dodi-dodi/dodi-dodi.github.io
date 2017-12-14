(function navbar() {
    let navbarMobileMenuButtons = document.querySelectorAll('#menu-icon');
    for (let navbarMobileMenuButton of navbarMobileMenuButtons) {
        navbarMobileMenuButton.addEventListener('click', function (e) {
            e.preventDefault();

            let menu = document.querySelector(navbarMobileMenuButton.getAttribute('data-menu-id'));
            toogleFlex(menu);

        });
    }
})();


function toogleFlex(element) {
    if (getComputedStyle(element).display === 'none') {
        element.style.display = 'flex';
    } else {
        element.style.display = null;
    }
}