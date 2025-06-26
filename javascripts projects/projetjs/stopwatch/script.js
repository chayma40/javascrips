let seconds = 0;
let minutes = 0;
let hours = 0;
let interval = null;
let isRunning = false;

function updateDisplay() {
    const display = document.getElementById("display");
    let hrs = hours < 10 ? "0" + hours : hours;
    let mins = minutes < 10 ? "0" + minutes : minutes;
    let secs = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = `${hrs}:${mins}:${secs}`;
}

function startTimer() {
    if (!isRunning) {
        interval = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 1000);
        isRunning = true;
    }
}

function stopTimer() {
    clearInterval(interval);
    isRunning = false;
}

function resetTimer() {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    isRunning = false;
    updateDisplay();
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
