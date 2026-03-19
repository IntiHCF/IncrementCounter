let count = 0;
let display = document.getElementById('counter');

function updateColor() {
  if (count > 0) display.style.color = 'green';
  else if (count < 0) display.style.color = 'red';
  else display.style.color = 'black';
}

function increase() {
  count++;
  display.textContent = count;
  updateColor();
}

function decrease() {
  count--;
  display.textContent = count;
  updateColor();
}
