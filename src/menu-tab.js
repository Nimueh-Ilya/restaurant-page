export default function menuTab() {
  // Create elements
  const subContainer = document.createElement("div");
  const menuContainer = document.createElement("div");
  const menuOpacity = document.createElement("div");
  const menuItems = document.createElement("ul");
  const menuItem1 = document.createElement("li");
  const menuItem2 = document.createElement("li");
  const menuItem3 = document.createElement("li");
  // Add their classes
  subContainer.classList.add("menu-content", "sub-container");
  menuItems.classList.add("menu-items");
  menuItem1.classList.add("menu-item");
  menuItem2.classList.add("menu-item");
  menuItem3.classList.add("menu-item");
  menuOpacity.classList.add("menu-opacity");
  menuContainer.classList.add("menu-opacity", "opacity");
  // Append them to their parents
  menuItems.appendChild(menuItem1);
  menuItems.appendChild(menuItem2);
  menuItems.appendChild(menuItem3);
  menuContainer.appendChild(menuOpacity);
  menuContainer.appendChild(menuItems);
  subContainer.appendChild(menuContainer);
  // Include Content

  return subContainer;
}
