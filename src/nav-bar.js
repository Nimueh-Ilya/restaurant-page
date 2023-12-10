import homeTab from "./home-tab";
import locationTab from "./location-tab";
import menuTab from "./menu-tab";
import aboutTab from "./about-tab";
function navBar() {
  // Create all nav bar elements
  const mainContainer = document.getElementById("content");
  const navBar = document.createElement("div");
  const navImg = document.createElement("div");
  const homeButton = document.createElement("button");
  const menuButton = document.createElement("button");
  const locationButton = document.createElement("button");
  const aboutButton = document.createElement("button");
  const orderButton = document.createElement("button");
  // Add content
  homeButton.innerText = "Home";
  menuButton.innerText = "Menu";
  locationButton.innerText = "Locations";
  aboutButton.innerText = "About";
  orderButton.innerText = "Order Now";
  // Add their classes
  navBar.classList.add("nav");
  navImg.classList.add("nav-image");
  homeButton.classList.add("nav-button");
  menuButton.classList.add("nav-button");
  locationButton.classList.add("nav-button");
  aboutButton.classList.add("nav-button");
  orderButton.classList.add("nav-button", "order-online");
  // Functions
  function loadPage(fun) {
    const subContainer = document.querySelector(".sub-container");
    if (subContainer) {
      subContainer.remove();
    }
    const page = fun();
    mainContainer.appendChild(page);
  }
  // Add event listeners for buttons
  homeButton.addEventListener("click", () => {
    loadPage(homeTab);
  });
  menuButton.addEventListener("click", () => {
    loadPage(menuTab);
  });
  locationButton.addEventListener("click", () => {
    loadPage(locationTab);
  });
  aboutButton.addEventListener("click", () => {
    loadPage(aboutTab);
  });
  // Append elements to nav bar
  navBar.appendChild(navImg);
  navBar.appendChild(homeButton);
  navBar.appendChild(menuButton);
  navBar.appendChild(locationButton);
  navBar.appendChild(aboutButton);
  navBar.appendChild(orderButton);
  // Return parent element
  mainContainer.appendChild(navBar);
  loadPage(homeTab);
}

export default navBar;
