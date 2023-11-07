const startButton = document.getElementById('startButton');
const countOutput = document.getElementById('countOutput');
const countInput = document.getElementById('countInput');

let countdownInterval;

// Check if there's a last input value in localStorage
if (localStorage.getItem('lastInput')) {
    const lastInputValue = localStorage.getItem('lastInput');
    countInput.value = lastInputValue;
    countOutput.innerHTML = `Last input: ${lastInputValue}`;
}

const startCounting = () => {
    const inputValue = countInput.value;

    if (!inputValue || isNaN(inputValue)) {
        alert('Please enter a valid number.');
        return;
    }

    localStorage.setItem('lastInput', inputValue);
    countOutput.innerHTML = `Countdown: ${inputValue}`;

    let counter = parseInt(inputValue, 10);

    // Clear any previous intervals before starting a new one
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    countdownInterval = setInterval(() => {
        if (counter > 0) {
            countOutput.innerHTML = `Countdown: ${counter}`;
            counter--;
        } else {
            countOutput.innerHTML = 'Countdown complete!';
            clearInterval(countdownInterval);
        }
    }, 1000);
}

startButton.addEventListener('click', startCounting);
