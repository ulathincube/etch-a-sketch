const container = document.querySelector('.container');
// const div = document.createElement('div');

let arrayOfDivs = [];

for (let i = 0; i < 256; i++) {
  const div = document.createElement('div');
  div.classList.add('grid-item');
  arrayOfDivs.push(div);
}

arrayOfDivs.forEach(div => container.appendChild(div));
