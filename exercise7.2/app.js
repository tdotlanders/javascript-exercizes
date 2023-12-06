const dropzoneNode = document.querySelector("dropzone");
const feedbackNode = document.querySelector("feedback");

dropzoneNode.addEventListener("dragenter", () => {
  dropzoneNode.style.borderColor = "red";
  feedbackNode.textContent = "Drop your file here";
});
dropzoneNode.addEventListener("dragleave", () => {
  dropzoneNode.style.borderColor = "black";
});

dropzoneNode.addEventListener("dragover", (event) => {
  event.preventDefault();
});

dropzoneNode.addEventListener("drop", (event) => {
  event.preventDefault();

  const file = event.dataTransfer.file.item(0);
});
