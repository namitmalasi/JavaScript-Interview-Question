const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

let startingTime = 10;
let time = startingTime * 60;

let interval = setInterval(startTimer, 10);

function startTimer() {
  if (time === 0) {
    clearInterval(interval);
    alert("The countdown has finished!!!");
  }
  let hoursTime = Math.floor(time / (60 * 60));
  let minutesTime = Math.floor(time / 60);
  let secondsTime = time % 60;

  secondsTime = secondsTime < 10 ? "0" + secondsTime : secondsTime;
  minutesTime = minutesTime < 10 ? "0" + minutesTime : minutesTime;
  hoursTime = hoursTime < 10 ? "0" + hoursTime : hoursTime;

  hours.innerHTML = `${hoursTime}:`;
  minutes.innerHTML = `${minutesTime}:`;
  seconds.innerHTML = `${secondsTime}`;
  time--;
}
