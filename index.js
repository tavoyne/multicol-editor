const connectedElements = document.querySelectorAll("#preview *[data-path]");
const selectElement = document.querySelector("select");

for (const connectedElement of connectedElements) {
  const path = connectedElement.getAttribute("data-path");
  const selector = `*[name="${path}"]`;
  const input = document.querySelector(selector);
  
  if (!input) {
    console.warn(new Error(`No element matches selector ${selector}.`));
  } else {
    connectedElement.textContent = input.value;
    input.addEventListener("keyup", (evt) => {
      connectedElement.textContent = evt.target.value;
    });
  }
}

selectElement.addEventListener("change", (evt) => {
  iframeElement.src = `templates/${evt.target.value}`;
});
