// Maximum no in an array

function maxNumber(arr) {
  let max = 0;
  for (const value of arr) {
    if (value > max) {
      max = value;
    }
  }
  return max;
}

console.log(maxNumber([1, 2, 3, 8, 8, 6, 7, 8]));

// Second max no in array

function secondMax(arr) {
  let first = -1;
  let second = -1;
  for (const value of arr) {
    if (value > first) {
      [second, first] = [first, value];
    } else if (value > second && value !== first) {
      second = value;
    }
  }
  return second;
}

console.log(secondMax([1, 2, 3, 6, 5, 4, 4, 4, 100, 100]));
