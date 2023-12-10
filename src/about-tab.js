export default function aboutTab() {
  // Create elements
  const subContainer = document.createElement("div");
  const aboutContainer = document.createElement("div");
  const aboutOpacity = document.createElement("div");
  const aboutParagraph = document.createElement("div");
  // Add their classes
  subContainer.classList.add("about-content", "sub-container");
  aboutContainer.classList.add("about-container");
  aboutOpacity.classList.add("about-opacity", "opacity");
  aboutParagraph.classList.add("about-paragraph");
  // Append them to their parents
  aboutContainer.appendChild(aboutOpacity);
  aboutContainer.appendChild(aboutParagraph);
  subContainer.appendChild(aboutContainer);
  // Include Content
  aboutParagraph.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deserunt laudantium ullam libero maiores quo expedita voluptatum quis vel repellendus numquam nihil, consequatur, impedit sint dicta corporis ipsum. Ab, quod?  ";

  return subContainer;
}
