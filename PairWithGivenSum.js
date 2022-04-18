// Approach 1
function PairWithGivenSum(arr, sum) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        return true;
      }
    }
  }
  return false;
}

const arr = [2, 3, 3, 6];

console.log(PairWithGivenSum(arr, 6));

// Approach 2

function PairWithGivenSum(arr, sum) {
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(sum - arr[i])) {
      return true;
    } else {
      set.add(arr[i]);
    }
  }
  return false;
}

const arr = [2, 1, 3, 6];

console.log(PairWithGivenSum(arr, 6));
