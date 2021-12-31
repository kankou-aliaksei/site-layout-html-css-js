const mobileNav = document.querySelector("div.wrapper nav.mobile-nav");
const mobileMenu = document.querySelector("div.mobile-menu");
const mobileCloseMenu = document.querySelector("div.mobile-close-menu");
const mobileNavLiAll = document.querySelectorAll("nav.mobile-nav ul li");

mobileMenu.addEventListener("click", () => {
    mobileNav.classList.add("active");
    mobileCloseMenu.classList.add("active");
});

mobileCloseMenu.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    mobileCloseMenu.classList.remove("active");
});

mobileNavLiAll.forEach((li, i) => {
    li.style.animationDelay = 1000 + i * 140 + "ms";
});
