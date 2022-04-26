//  Given an array arr[] consisting 0s, 1s and 2s.
// The task is to write a function that sorts the given array.
// The functions should put all 0s first, then all 1s and all 2s in last.

// Approach 1()-->less Efficient
function sortArrayOf0s1sand2s(arr) {
  count0 = 0;
  count1 = 0;
  count2 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count0++;
    } else if (arr[i] === 1) {
      count1++;
    } else {
      count2++;
    }
  }

  let i = 0;

  while (count0 > 0) {
    arr[i++] = 0;
    count0--;
  }

  while (count1 > 0) {
    arr[i++] = 1;
    count1--;
  }

  while (count2 > 0) {
    arr[i++] = 2;
    count2--;
  }
  return arr;
}

const arr = [2, 1, 0, 0, 1, 2, 0, 2, 1, 0];
console.log(sortArrayOf0s1sand2s(arr));

// Approach 2()-->More efficient
function sortArrayOf0s1sand2s(arr) {
  let left = 0;
  let mid = 0;
  let right = arr.length - 1;
  while (mid <= right) {
    if (arr[mid] === 0) {
      [arr[mid], arr[left]] = [arr[left], arr[mid]];
      left++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[right]] = [arr[right], arr[mid]];
      right--;
    }
  }
  return arr;
}

const arr = [2, 1, 0, 0, 1, 2, 0, 2, 1, 0];
console.log(sortArrayOf0s1sand2s(arr));
