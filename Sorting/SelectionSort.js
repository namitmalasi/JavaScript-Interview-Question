// This algorithm repeatedly selects the smallest (or largest) element from the unsorted portion
// of the list and swaps it with the first element of the unsorted part. This process is repeated
// for the remaining unsorted portion until the entire list is sorted.

function SelectionSort(arr, length) {
  for (let i = 0; i < length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[j] > arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

console.log(SelectionSort([64, 25, 12, 22, 11], 5));
