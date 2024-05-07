let count = 0;
const countElement = document.getElementById('count');

function increment() {
  count++;
  countElement.textContent = count;
}

function decrement() {
    if (count > 0) {
  count--;
} else {
    count = 0;
}
  countElement.textContent = count;
}
function reset() {
  count = 0;
  countElement.textContent = 0;
}