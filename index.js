// Script for navigation bar
const navMenu = document.getElementById("icon");
const nav = document.getElementById("navbar");
const navBag = document.getElementById("bag");
const navClose = document.getElementById("close");
if (navMenu) {
    navMenu.addEventListener("click", () => {
        nav.classList.add("active");
        navBag.classList.remove("fa-beat");
    })
}
if (navClose) {
    navClose.addEventListener("click", () => {
        nav.classList.remove("active");
        navBag.classList.add("fa-beat");
    })      
}
function openProductPage(productId) {
    window.location.href = "sproduct.html?id=" + productId;
}
