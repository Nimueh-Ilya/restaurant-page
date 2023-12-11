export default function locationTab() {
  // Create elements
  // Create elements
  const subContainer = document.createElement("div");
  const locationContainer = document.createElement("div");
  const locationOpacity = document.createElement("div");
  const locationMapContainer = document.createElement("div");
  const locationMap = document.createElement("div");
  const locationParagraph = document.createElement("div");
  // Add their classes
  subContainer.classList.add("location-content", "sub-container");
  locationMap.classList.add("location-map");
  locationMapContainer.classList.add("location-map-container");
  locationContainer.classList.add("location-container");
  locationOpacity.classList.add("location-opacity", "opacity");
  locationParagraph.classList.add("location-paragraph");
  // Append them to their parents
  locationMapContainer.appendChild(locationMap);
  locationContainer.appendChild(locationOpacity);
  locationContainer.appendChild(locationMapContainer);
  locationContainer.appendChild(locationParagraph);
  subContainer.appendChild(locationContainer);
  // Include Content
  locationParagraph.innerHTML =
    "<p> Umami Haven <br> 23 Sakura Lane <br> Springville, Culinary District <br> Tokyo-inspired City, Ramenia</p>";
  return subContainer;
}
