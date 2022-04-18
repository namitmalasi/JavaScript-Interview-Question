// Approach 1 (Brute force)
function shiftZerosToEnd(arr) {
  let countOfZeros = 0;
  let resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      resultArray.push(arr[i]);
    } else {
      countOfZeros++;
    }
  }

  for (let j = 0; j < countOfZeros; j++) {
    resultArray.push(0);
  }
  return resultArray;
}

const arr = [8, 5, 9, 5, 0, 0, 0, 1, 4, 0];
console.log(shiftZerosToEnd(arr));

// Approach 2 (Optimised)

function shiftZerosToEnd(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[count]] = [arr[count], arr[i]];
      count++;
    }
  }
  return arr;
}

const arr = [8, 5, 9, 5, 0, 0, 0, 1, 4, 0];
console.log(shiftZerosToEnd(arr));
