export default function menuTab() {
  // Create elements
  const subContainer = document.createElement("div");
  const menuContainer = document.createElement("div");
  const menuOpacity = document.createElement("div");
  const menuItems = document.createElement("ul");
  const menuItem1 = document.createElement("div");
  const menuItem2 = document.createElement("div");
  const menuItem3 = document.createElement("div");
  const menuItem1Paragraph = document.createElement("p");
  const menuItem2Paragraph = document.createElement("p");
  const menuItem3Paragraph = document.createElement("p");
  const menuItem1ParagraphTitle = document.createElement("p");
  const menuItem2ParagraphTitle = document.createElement("p");
  const menuItem3ParagraphTitle = document.createElement("p");
  const menuItem1Image = document.createElement("div");
  const menuItem2Image = document.createElement("div");
  const menuItem3Image = document.createElement("div");
  // Add their classes
  subContainer.classList.add("menu-content", "sub-container");
  menuItems.classList.add("menu-items");
  menuItem1.classList.add("menu-item");
  menuItem2.classList.add("menu-item");
  menuItem3.classList.add("menu-item");
  menuItem1Paragraph.classList.add("menu-item-paragraph");
  menuItem2Paragraph.classList.add("menu-item-paragraph");
  menuItem3Paragraph.classList.add("menu-item-paragraph");
  menuItem1ParagraphTitle.classList.add("menu-item-title");
  menuItem2ParagraphTitle.classList.add("menu-item-title");
  menuItem3ParagraphTitle.classList.add("menu-item-title");
  menuItem1Image.classList.add("menu-item-image1", "menu-item-image");
  menuItem2Image.classList.add("menu-item-image2", "menu-item-image");
  menuItem3Image.classList.add("menu-item-image3", "menu-item-image");
  menuOpacity.classList.add("menu-opacity", "opacity");
  menuContainer.classList.add("menu-container");
  // Append them to their parents
  menuItems.appendChild(menuItem1);
  menuItems.appendChild(menuItem2);
  menuItems.appendChild(menuItem3);
  menuItem1.appendChild(menuItem1Image);
  menuItem2.appendChild(menuItem2Image);
  menuItem3.appendChild(menuItem3Image);
  menuItem1.appendChild(menuItem1ParagraphTitle);
  menuItem2.appendChild(menuItem2ParagraphTitle);
  menuItem3.appendChild(menuItem3ParagraphTitle);
  menuItem1.appendChild(menuItem1Paragraph);
  menuItem2.appendChild(menuItem2Paragraph);
  menuItem3.appendChild(menuItem3Paragraph);
  menuContainer.appendChild(menuOpacity);
  menuContainer.appendChild(menuItems);
  subContainer.appendChild(menuContainer);
  // Include Content
  menuItem1ParagraphTitle.textContent = "Sakura Blossom Bliss Ramen";
  menuItem2ParagraphTitle.textContent = "Noodle Nirvana Miso Fusion ";
  menuItem3ParagraphTitle.textContent = "Zen Garden Zenith Bowl ";
  menuItem1Paragraph.innerHTML =
    " Delicate cherry blossom-infused broth <br> Tender slices of chashu beef <br> Spring-green spinach <br> A sprinkle of sesame seeds <br> Harmonizing in a bowl of floral delight.";
  menuItem2Paragraph.innerHTML =
    " A fusion masterpiece featuring miso-infused broth<br> Wavy ramen noodles<br> Succulent grilled chicken<br> Sweet corn<br> A hint of spicy sriracha for a symphony of flavors that dance on your taste buds.";
  menuItem3Paragraph.innerHTML =
    "Immerse yourself in tranquility with a light and fragrant green tea-infused broth<br> Paired with slender soba noodles, an array of crisp, fresh vegetables, silky tofu<br> Finished with a sprinkle of sesame seeds.";
  return subContainer;
}
