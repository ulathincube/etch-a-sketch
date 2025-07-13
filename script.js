const container = document.querySelector('.container');
const button = document.querySelector('.prompt');

let arrayOfDivs = [];
let amount;

function generateBoxes(number) {
  if (number > 100) {
    return;
  }
  const grid = number * number;
  const sizing = 480 / number;

  for (let i = 0; i < grid; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    div.style.width = `${sizing}px`;
    div.style.height = `${sizing}px`;
    arrayOfDivs.push(div);
  }

  arrayOfDivs.forEach(div => container.appendChild(div));
}

generateBoxes(16);

button.addEventListener('click', event => {
  const gridItems = document.querySelectorAll('.grid-item');

  const gridItemArr = Array.from(gridItems);

  gridItemArr.forEach(item => {
    container.removeChild(item);
    arrayOfDivs = [];
  });

  amount = Number(prompt('How many boxes do you want to render per line?', 16));

  if (amount > 0 && amount) {
    generateBoxes(amount);
  }
});

const gridItems = document.querySelectorAll('.grid-item');
const gridItemsArr = Array.from(gridItems);

container.addEventListener('click', event => {
  randomizeColor(event.target);
});

function randomizeColor(node) {
  const random = () => Math.floor(Math.random() * 255) + 1;
  const color = `rgb(${random()},${random()},${random()})`;
  node.style.backgroundColor = color;
}

// function darken(node) {
//   const color = node.style.backgroundColor;
// }
