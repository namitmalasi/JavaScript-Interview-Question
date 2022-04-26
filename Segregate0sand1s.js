// You are given an array of 0s and 1s in random order.
// Segregate 0s on left side and 1s on right side of the array
// [Basically you have to sort the array]. Traverse array only once.

// Approach 1 (The array is traversed multiple times)-->Not Efficient
function Segregate0sand1s(arr) {
  let length = arr.length;
  let count0 = 0;

  for (let i = 0; i < length; i++) {
    if (arr[i] === 0) {
      count0++;
    }
  }

  for (let i = 0; i < count0; i++) {
    arr[i] = 0;
  }
  for (let i = count0; i < length; i++) {
    arr[i] = 1;
  }
  console.log(arr);
}

const arr = [0, 1, 0, 1, 0, 1, 0, 0, 0, 1];
Segregate0sand1s(arr);

// Approach 2()-->Efficient

function Segregate0sand1s(arr) {
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    while (arr[low] == 0 && low < high) low++;

    while (arr[high] == 1 && low < high) high--;

    if (low < high) {
      arr[low] = 0;
      arr[high] = 1;
      low++;
      high--;
    }
  }
  return arr;
}

const arr = [0, 1, 0, 1, 0, 1, 0, 0, 0, 1];
console.log(Segregate0sand1s(arr));
