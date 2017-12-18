// (function navbar() {
//     let navbarMobileMenuButtons = document.querySelectorAll('#menu-icon');
//     for (let navbarMobileMenuButton of navbarMobileMenuButtons) {
//         navbarMobileMenuButton.addEventListener('click', function (e) {
//             e.preventDefault();
//             let menu = document.querySelector("#main-menu");
//             toggleFlex(menu);
//         });
//     }
// })();
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
        // tutaj robimy click event na elemencie button
        // musisz sobie zamiast 'button' podac seelktor przycisku w menu

        let target = $("#" + $(this).data('target'));
        // tareget do ktorego strona ma sie przewinac
        // musi to byc albo queryselector albo jquery selector
        // na poczatku doklejam hashtag zeby zrobic z tego ID
        console.log(target);

        $(window).scrollTo(target, 500, {offset: {top: -96}});
        // zawsze przewijasz cale okno przegladarki dlatego jest window
        // potem wybierasz scrollTo i pierwszy argument to cel do ktorego
        // strona ma sie przewinac.
        // drugi argument to czas w jakim ma sie przewinac
        toggleFlex(menu);
    });
});
