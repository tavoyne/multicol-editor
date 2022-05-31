const iframeElement = document.querySelector("iframe");
const selectElement = document.querySelector("select");

iframeElement.addEventListener("load", () => {
  const iframeDocument = iframeElement.contentDocument;
  const elements = iframeDocument.querySelectorAll("*[data-path]");
  for (const element of elements) {
    const path = element.getAttribute("data-path");
    const selector = `*[name="${path}"]`;
    const input = document.querySelector(selector);
    if (!input) {
      console.warn(new Error(`Couldn't find element with [name="${path}"].`))
    } else {
      element.textContent = input.value;
      input.addEventListener("keyup", (evt) => {
        element.textContent = evt.target.value;
      });
    }
  }
});

selectElement.addEventListener("change", (evt) => {
  iframeElement.src = `templates/${evt.target.value}`;
});
