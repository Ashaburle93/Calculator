const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');
let input = '';

function updateDisplay() {
  display.textContent = input || '0';
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      input = '';
    } else if (value === '=') {
      try {
        input = eval(input).toString();
      } catch {
        input = 'Error';
      }
    } else if (value === '⌫') {
      input = input.slice(0, -1);
    } else {
      input += value;
    }

    updateDisplay();
  });
});

document.addEventListener('keydown', (e) => {
  const key = e.key;

  if (/[\d.+\-*/%]/.test(key)) {
    input += key;
  } else if (key === 'Enter') {
    try {
      input = eval(input).toString();
    } catch {
      input = 'Error';
    }
  } else if (key === 'Backspace') {
    input = input.slice(0, -1);
  } else if (key.toLowerCase() === 'c') {
    input = '';
  }

  updateDisplay();
});