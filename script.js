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

// Product Page
let search = document.getElementById("search");
let productContainer = document.getElementById("product-container");
let productList = productContainer.querySelectorAll("div");

search.addEventListener("keyup", function () {
  let enteredProduct = event.target.value.toLowerCase();
  console.log(enteredProduct);
  for (count = 0; count < productList.length; count = count + 1) {
    let productName = productList[count].querySelector("h1").textContent;
    console.log(productName);
    console.log(productName);
    if (productName.toLowerCase().indexOf(enteredProduct) < 0) {
      productList[count].style.display = "none";
    } else {
      productList[count].style.display = "block";
    }
  }
});
