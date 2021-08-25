// Creating a progress bar in javascript

//Approcah 1:

const progressbar = document.querySelector(".progress-bar");

function progressBar(seconds) {
  let value = 0;
  const id = setInterval(() => {
    progressbar.style.width = value + "%";
    value++;

    if (value > 100) {
      clearInterval(id);
    }
  }, (seconds * 1000) / 100);
}

//Approach 2:

// function progressBar(seconds) {
//   progressbar.style.transition = `${seconds}s linear width`;
//   progressbar.style.width = "100%";
// }
