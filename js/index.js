document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector("header nav");
    var isScrolled = false;

    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;

        if (scrollPosition > 70 && !isScrolled) {
            navbar.classList.add("scrolled");
            navbar.classList.add("fixed");
            isScrolled = true;
        } else if (scrollPosition <= 70 && isScrolled) {
            navbar.classList.remove("scrolled");
            navbar.classList.remove("fixed");
            isScrolled = false;
        }
    });
});