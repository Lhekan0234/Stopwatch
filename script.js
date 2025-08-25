let countdown;
let display = document.getElementById('display');

function startCountdown() {
    const hoursInput = parseInt(document.getElementById('hours').value) || 0;
    const minutesInput = parseInt(document.getElementById('minutes').value) || 0;
    const secondsInput = parseInt(document.getElementById('seconds').value) || 0;

    const totalMilliseconds = (hoursInput * 3600 + minutesInput * 60 + secondsInput) * 1000;

    if (isNaN(totalMilliseconds) || totalMilliseconds <= 0) {
        alert('Please enter a valid countdown duration.');
        return;
    }

    if (countdown) {
        clearInterval(countdown);
    }

    countdown = setInterval(function () {
        updateDisplay(totalMilliseconds);
        if (totalMilliseconds <= 0) {
            clearInterval(countdown);
        } else {
            totalMilliseconds -= 10; // Subtract 10 milliseconds for more precision
        }
    }, 10);
}

function updateDisplay(totalMilliseconds) {
    const hours = Math.floor(totalMilliseconds / 3600000);
    const minutes = Math.floor((totalMilliseconds % 3600000) / 60000);
    const seconds = Math.floor((totalMilliseconds % 60000) / 1000);
    const milliseconds = totalMilliseconds % 1000;

    display.textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds) + ':' + formatMilliseconds(milliseconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function formatMilliseconds(milliseconds) {
    return milliseconds < 10 ? '00' + milliseconds : (milliseconds < 100 ? '0' + milliseconds : milliseconds);
}
