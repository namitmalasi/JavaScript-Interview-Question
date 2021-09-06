const hour = document.querySelector("#hours");
const minute = document.querySelector("#minutes");
const second = document.querySelector("#seconds");
const start = document.querySelector("#button-start");
const stop = document.querySelector("#button-stop");
const reset = document.querySelector("#button-reset");

let hourValue = 0;
let minuteValue = 0;
let secondValue = 0;
let interval = null;

let displayHour = 0;
let displayMinute = 0;
let displaySecond = 0;

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);

function startTimer() {
  interval = setInterval(starter, 10);
}

function starter() {
  secondValue++;

  if (secondValue >= 59) {
    secondValue = 0;

    minuteValue++;
  }
  if (minuteValue >= 59) {
    minuteValue = 0;

    hourValue++;
  }

  if (secondValue < 10) {
    displaySecond = "0" + secondValue.toString();
  } else {
    displaySecond = secondValue;
  }
  if (minuteValue < 10) {
    displayMinute = "0" + minuteValue.toString();
  } else {
    displayMinute = minuteValue;
  }
  if (hourValue < 10) {
    displayHour = "0" + hourValue.toString();
  } else {
    displayHour = hourValue;
  }

  second.innerHTML = displaySecond;
  minute.innerHTML = displayMinute + ":";
  hour.innerHTML = displayHour + ":";
}
function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  hourValue = 0;
  minuteValue = 0;
  secondValue = 0;
  hour.innerHTML = hourValue + "0";
  minute.innerHTML = minuteValue + "0";
  second.innerHTML = secondValue + "0";
}
