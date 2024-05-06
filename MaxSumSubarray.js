
// Brute Force approach
function find_maximum_subarray(arr, length) {
  /*write the code to find the maximum subarray sum
    Both array and size of array is given */

  let max_sum = arr[0];
  for (let i = 0; i < length; i++) {
    let curr_sum = 0;
    for (let j = i; j < length; j++) {
      curr_sum += arr[j];
      if (curr_sum > max_sum) max_sum = curr_sum;
    }
  }
  return max_sum;
}

console.log(find_maximum_subarray([5, 2, -4, -5, 3, -1, 2, 3, 1], 9));



// Kadane's Algorithm

// The idea of Kadane’s algorithm is to maintain a variable max_ending_here that stores the
// maximum sum contiguous subarray ending at current index and a variable max_so_far stores the
// maximum sum of contiguous subarray found so far, Everytime there is a positive-sum value
// in max_ending_here compare it with max_so_far and update max_so_far if it is greater than
// max_so_far.

// So the main Intuition behind Kadane’s Algorithm is,

// 1. The subarray with negative sum is discarded (by assigning max_ending_here = 0 in code).
// 2. We carry subarray till it gives positive sum.



function find_maximum_subarray(arr, length) {
    
  let max_sum = arr[0];
  let sum = 0;
  for (let i = 0; i < length; i++) {
    sum = sum + arr[i];
    if (sum > max_sum) max_sum = sum;
    if (sum < 0) sum = 0;
  }
  return max_sum;
}

console.log(find_maximum_subarray([5, 2, -4, -5, 3, -1, 2, 3, 1], 9));
