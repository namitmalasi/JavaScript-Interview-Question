// brute force approach
function productExceptSelf(nums) {
  let output = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) output[i] *= nums[j];
    }
  }
  return output;
}

// effienct approach

function productExceptSelf(nums) {
  let zeros = 0,
    idx = -1,
    prod = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeros++;
      idx = i;
    } else {
      prod *= nums[i];
    }
  }

  let res = new Array(nums.length).fill(0);

  if (zeros === 0) {
    for (let i = 0; i < nums.length; i++) {
      res[i] = Math.floor(prod / nums[i]);
    }
  } else if (zeros === 1) {
    res[idx] = prod;
  }
  return res;
}
