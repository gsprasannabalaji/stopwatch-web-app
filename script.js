const timerRef = document.querySelector('#timer');

const dateRef = document.querySelector('#date-picker');

let intervalId = null;
let hours = 0, minutes = 0, seconds = 0;

const startTimer = () => {
    if(!intervalId) {
        intervalId = setInterval(async() => {
            await updateTimer();
        }, 1000);
    }
}

const stopTimer = () => { 
    clearInterval(intervalId);
    intervalId = null;
}

const resetTimer = () => {   
    hours = 0;
    minutes = 0;
    seconds = 0;
    timer.innerHTML = "00:00:00";
}

const updateTimer = () => {
    return new Promise((resolve) => {
        seconds++;
        if(seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if(minutes === 60) {
            minutes = 0;
            hours++;
        }
        if(hours === 24) {
            hours = 0;
        }
        showTimerDisplay();
        resolve();
    });
}

const showTimerDisplay = () => {
    timerRef.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

const currentDate = new Date();

const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
const day = currentDate.getDate().toString().padStart(2, '0');

   
const formattedDate = `${year}-${month}-${day}`;

dateRef.setAttribute('value', formattedDate);

dateRef.setAttribute('max', formattedDate);