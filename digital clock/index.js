function clock() {
  const fullDate = new Date();

  let hour = fullDate.getHours();
  let minute = fullDate.getMinutes();
  let second = fullDate.getSeconds();

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }

  let session = hour > 12 ? "PM" : "AM";

  document.querySelector("#hours").innerHTML = hour;
  document.querySelector("#minutes").innerHTML = ":" + minute;
  document.querySelector("#seconds").innerHTML = ":" + second;
  document.querySelector("#session").innerHTML = " " + session;

  setTimeout(clock, 1000);
}

clock();
