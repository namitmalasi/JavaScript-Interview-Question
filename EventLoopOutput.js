// The output of below code will be 0-8 but the terminal cursor does not get free.
// It means that that the output is displayed but the program kept running.
// It is because we have not cleared the interval.

let a = true;
let count = 0;

setTimeout(() => {
  a = false;
}, 2000);

setInterval(() => {
  if (a) {
    console.log(count++);
  }
}, 200);

// The output of the below code will infinite loop because the value a never becomes false.
// This happens due to Event loop.

let a = true;
let count = 0;

setTimeout(() => {
  a = false;
}, 2000);

while (a) {
  console.log(count++);
}

// The output of below code will be 0-8 and the cursor gets free meaning that,
// the program has fiished executing or running.

let count = 0;

let id = setInterval(() => {
  console.log(count++);
}, 200);

setTimeout(() => {
  clearInterval(id);
}, 2000);
