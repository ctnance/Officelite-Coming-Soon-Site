let daysCount = document.querySelector(".days");
let hoursCount = document.querySelector(".hours");
let minutesCount = document.querySelector(".minutes");
let secondsCount = document.querySelector(".seconds");
let days = 47;
let hours = 7;
let minutes = 56;
let seconds = 14;

console.log(minutes);

const startTimer = () => {
    timer = setInterval(() => {
        seconds--;

        if (seconds < 0) {
            minutes--;
            seconds = 59;
            if (minutes < 0) {
                hours--;
                minutes = 59;
                if (hours < 0) {
                    days--;
                    hours = 23;
                }
            }
        }

        daysCount.innerHTML = ("0" + days).slice(-2);
        hoursCount.innerHTML = ("0" + hours).slice(-2);
        minutesCount.innerHTML = ("0" + minutes).slice(-2);
        secondsCount.innerHTML = ("0" + seconds).slice(-2);

        if (minutes <= 0 && seconds <= 0) {
        }
    }, 1000);
};

startTimer();