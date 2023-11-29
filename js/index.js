document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector("header nav.menu-nav");
    var toposite = document.querySelector("header .toposite");
    var btnabrir = document.querySelector(".btn-abrir i");
    var btnphone = document.querySelector(".btn-phone");
    var isScrolled = false;

    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;

        if (scrollPosition > 70 && !isScrolled) {
            navbar.classList.add("scrolled");
            navbar.classList.add("fixed");
            toposite.classList.add("fixed");
            btnabrir.classList.add("fixed");
            btnphone.classList.add("fixed");
            isScrolled = true;
        } else if (scrollPosition <= 70 && isScrolled) {
            navbar.classList.remove("scrolled");
            navbar.classList.remove("fixed");
            toposite.classList.remove("fixed");
            btnabrir.classList.remove("fixed");
            btnphone.classList.remove("fixed");
            isScrolled = false;
        }
    });
});

function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}