const colorPicker = document.getElementById("colorPicker");
const canvas = document.getElementById("canvas");
const sizePicker = document.getElementById("sizePicker");
const clearButton = document.getElementById("clearButton");
let size = document.getElementById("inputSize").value;

setupCanvas(size);

clearButton.addEventListener("click", (e) => {
  size = document.getElementById("inputSize").value;
  redrawCanvas(size);
});

sizePicker.addEventListener("click", (e) => {
  e.preventDefault();
  size = document.getElementById("inputSize").value;
  redrawCanvas(size);
});

function redrawCanvas(size) {
  clearCanvas();
  setupCanvas(size);
}

function clearCanvas() {
  canvas.innerHTML = "";
}

function setupCanvas(size) {
  canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  canvas.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("pixel"))
      e.target.style.backgroundColor = colorPicker.value;
  });

  for (let i = 0; i < size * size; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");

    canvas.appendChild(pixel);
  }
}
