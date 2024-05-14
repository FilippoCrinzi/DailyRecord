
window.addEventListener('scroll', function() {
    var elements = ['.headBar', '.secondary', '#takeover', '.container-account',
        '.icon-instagram', '.icon-facebook', '.icon-twitter',
        '.account', '.search-icon', '.hamburger', '.follow-us'];
    var pages = document.querySelectorAll('.pages');

    elements.forEach(function(selector) {
        var element = document.querySelector(selector);
        if (window.pageYOffset > 20) {
            element.classList.add('scrolled');
        } else {
            element.classList.remove('scrolled');
        }
    });

    pages.forEach(function(page) {
        if (window.pageYOffset > 20) {
            page.classList.add('scrolled');
        } else {
            page.classList.remove('scrolled');
        }
    });
});

document.querySelector('.hamburger').addEventListener('click', function(event) {
    var dropdownMenu = document.querySelector('.dropdown-menu1');
    dropdownMenu.classList.toggle('show');
    event.stopPropagation(); // Evita la propagazione dell'evento click ai genitori
});
window.addEventListener('resize', function() {
    var dropdownMenu = document.querySelector('.dropdown-menu1');
    if (window.innerWidth > 728) { // Sostituisci 728 con la larghezza del viewport desiderata
        dropdownMenu.classList.remove('show');
    }
});
