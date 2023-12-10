export default function locationTab() {
  // Create elements
  // Create elements
  const subContainer = document.createElement("div");
  const locationContainer = document.createElement("div");
  const locationOpacity = document.createElement("div");
  const locationParagraph = document.createElement("div");
  // Add their classes
  subContainer.classList.add("location-content", "sub-container");
  locationContainer.classList.add("location-container");
  locationOpacity.classList.add("location-opacity", "opacity");
  locationParagraph.classList.add("location-paragraph");
  // Append them to their parents
  locationContainer.appendChild(locationOpacity);
  locationContainer.appendChild(locationParagraph);
  subContainer.appendChild(locationContainer);
  // Include Content
  return subContainer;
}
