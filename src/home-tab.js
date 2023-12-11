export default function homeTab() {
  // Create elements
  const subContainer = document.createElement("div");
  const parContainer = document.createElement("div");
  const mainPar = document.createElement("p");
  const subPar = document.createElement("p");
  // Add their classes
  parContainer.classList.add("par-container");
  mainPar.classList.add("main-text");
  subPar.classList.add("sub-text");
  subContainer.classList.add("home-content", "sub-container");
  // Append them to their parents
  parContainer.appendChild(mainPar);
  parContainer.appendChild(subPar);
  subContainer.appendChild(parContainer);
  // Include Content
  mainPar.innerHTML = " Every strand tells a story, and every bowl";
  subPar.innerHTML = "is a journey through a world of flavors.";
  return subContainer;
}
