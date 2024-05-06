// In Bubble Sort algorithm,

// 1. traverse from left and compare adjacent elements and the higher one is placed at right side.
// 2. In this way, the largest element is moved to the rightmost end at first.
// 3. This process is then continued to find the second largest and place it and so on until
//    the data is sorted.

function BubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(BubbleSort([5, -3, 40, -2, 1, 0]));
