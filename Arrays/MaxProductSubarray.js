// brute force approach
function maxProductSubarray(nums) {
  let max_product = nums[0];
  let product;
  for (let i = 0; i < nums.length; i++) {
    product = 1;
    for (let j = i; j < nums.length; j++) {
      product *= nums[j];

      if (product > max_product) max_product = product;
    }
  }
  return max_product;
}

// optimal approach
function max_product_subarray(nums) {
  let n = nums.length;
  let max_product = Number.NEGATIVE_INFINITY;
  let prefix = 1;
  let suffix = 1;
  for (let i = 0; i < n; i++) {
    if (prefix === 0) prefix = 1;
    if (suffix === 0) suffix = 1;

    prefix *= nums[i];
    suffix *= nums[n - i - 1];
    max_product = Math.max(max_product, Math.max(prefix, suffix));
  }
  return max_product;
}
