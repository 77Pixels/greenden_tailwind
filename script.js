// Secleting navbar, menu icon. close nav

let sideNav = document.getElementById("side-nav");
let menuIcon = document.getElementById("menu-icon");
let closeNav = document.getElementById("close-nav");

menuIcon.addEventListener("click", function () {
  sideNav.style.right = 0;
});

closeNav.addEventListener("click", function () {
  sideNav.style.right = "-50%";
});
