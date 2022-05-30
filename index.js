const iframeElement = document.querySelector("iframe");

iframeElement.addEventListener("load", () => {
  const iframeDocument = iframeElement.contentDocument;
  const mirrorElements = iframeDocument.querySelectorAll("*[data-path]");
  for (const element of mirrorElements) {
    const query = `*[name="${element.getAttribute("data-path")}"]`;
    const input = document.querySelector(query);
    element.textContent = input.value;
    input.addEventListener("keyup", (evt) => {
      element.textContent = evt.target.value;
    });
  }
});

const selectElement = document.querySelector("select");
selectElement.addEventListener("change", (evt) => {
  const iframeElement = document.querySelector("iframe");
  iframeElement.src = `templates/${evt.target.value}/`;
});
