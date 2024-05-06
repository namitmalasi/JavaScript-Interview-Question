// To achieve insertion sort, follow these steps:

// 1. We have to start with second element of the array as first element in the array is assumed 
// to be sorted.
// 2. Compare second element with the first element and check if the second element is smaller 
// then swap them.
// 3. Move to the third element and compare it with the second element, then the first element 
// and swap as necessary to put it in the correct position among the first three elements.
// 4. Continue this process, comparing each element with the ones before it and swapping as needed 
// to place it in the correct position among the sorted elements.
// 5. Repeat until the entire array is sorted.


function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
console.log(insertionSort([4, 3, 2, 5, 1]));
