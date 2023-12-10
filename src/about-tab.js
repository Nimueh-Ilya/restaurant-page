export default function aboutTab() {
  // Create elements
  const subContainer = document.createElement("div");
  const aboutContainer = document.createElement("div");
  const aboutOpacity = document.createElement("div");
  const aboutParagraph = document.createElement("div");
  const aboutParagraph1 = document.createElement("p");
  const aboutParagraph2 = document.createElement("p");
  const aboutParagraph3 = document.createElement("p");
  const aboutParagraph4 = document.createElement("p");
  // Add their classes
  subContainer.classList.add("about-content", "sub-container");
  aboutContainer.classList.add("about-container");
  aboutOpacity.classList.add("about-opacity", "opacity");
  aboutParagraph.classList.add("about-paragraph");
  aboutParagraph1.classList.add("about-paragraphs");
  aboutParagraph2.classList.add("about-paragraphs");
  aboutParagraph3.classList.add("about-paragraphs");
  aboutParagraph4.classList.add("about-paragraphs");
  // Append them to their parents
  aboutParagraph.appendChild(aboutParagraph1);
  aboutParagraph.appendChild(aboutParagraph2);
  aboutParagraph.appendChild(aboutParagraph3);
  aboutParagraph.appendChild(aboutParagraph4);
  aboutContainer.appendChild(aboutOpacity);
  aboutContainer.appendChild(aboutParagraph);
  subContainer.appendChild(aboutContainer);
  // Include Content
  aboutParagraph1.innerText =
    "Welcome to Umami Delights, your destination for authentic Japanese ramen in the heart of the city.";
  aboutParagraph2.innerText =
    "We take pride in crafting each bowl with care, using the finest locally and internationally sourced ingredients.";
  aboutParagraph3.innerText =
    "Our rich, flavorful broths and diverse menu invite both seasoned ramen enthusiasts and first-time diners to savor the essence of Tokyo's culinary artistry.";
  aboutParagraph4.innerText =
    "Join us for an unforgettable experience where every slurp is a journey, and every bowl is a masterpiece.";
  return subContainer;
}
