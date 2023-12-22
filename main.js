const squares = document.querySelector(".squares");
const easyButton = document.querySelector(".easy");
const mediumButton = document.querySelector(".medium");
const hardButton = document.querySelector(".hard");
const newButton = document.querySelector(".new");
const colorDisplay = document.querySelector(".color");

const container = document.querySelector(".container");

let count = 3;
let colors = [];
let pickedColor = "";

function pickColor() {
  pickedColor = colors[Math.floor(Math.random() * colors.length)];
  colorDisplay.innerHTML = pickedColor.toUpperCase();
}

function createColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let color = `rgb(${r}, ${g}, ${b})`;
  return color;
}

function createBlock() {
  let code = createColor();
  colors.push(code);
  let square = document.createElement("div");
  square.className = "square";
  square.style.backgroundColor = code;
  square.addEventListener("click", () => {
    container.style.backgroundColor = pickedColor;
    if (code === pickedColor) {
      alert("YOU WON!");
      createSquares();
    } else {
      alert("YOU LOSE!");
      createSquares();
    }
    createSquares();
  });
  return square;
}

function createSquares() {
  colors = [];
  squares.innerHTML = "";
  for (let i = 0; i < count; i++) {
    let block = createBlock();
    squares.append(block);
  }
  pickColor();
  console.log(pickedColor);
}

easyButton.addEventListener("click", () => {
  count = 3;
  createSquares();
});

mediumButton.addEventListener("click", () => {
  count = 6;
  createSquares();
});

hardButton.addEventListener("click", () => {
  count = 9;
  createSquares();
});

newButton.addEventListener("click", () => {
  createSquares();
});
