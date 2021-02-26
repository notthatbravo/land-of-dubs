
// Mobile Nav Toggle
let menuButton = document.querySelector(".hamburger-icon");
let closeButton = document.querySelector(".close-icon");
let mobileNavMenu = document.querySelector(".desktop-nav");

menuButton.addEventListener("click", toggleNav);
closeButton.addEventListener("click", hideNav);

function toggleNav() {
    mobileNavMenu.style.height = "15em";
    menuButton.style.display = "none";
    closeButton.style.display = "block";
}

function hideNav() {
    mobileNavMenu.style.height = "0";
    menuButton.style.display = "block";
    closeButton.style.display = "none";
}
