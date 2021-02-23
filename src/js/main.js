const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");
const button = document.querySelector(".open-menu-btn");

hamburger.addEventListener("click", () => {
    nav.style.width = "16rem";
    nav.style.left = "0";
    button.style.left = "2rem";
    hamburger.classList.add("hidden");
    close.classList.remove("hidden");
})

close.addEventListener("click", () => {
    nav.style.width = "0";
    nav.style.left = "-4rem";
    button.style.left = "unset";
    hamburger.classList.remove("hidden");
    close.classList.add("hidden");
})