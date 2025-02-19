// brute force approach
function twosum(nums, target) {
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        res.push(i);
        res.push(j);
        return res;
      }
    }
  }
}

console.log(twosum([2, 7, 11, 15], 9));

// Optimized approach
function twosum(nums, target) {
  const map = new Map();

  for (let index in nums) {
    let pairTarget = target - nums[index];

    if (map.has(pairTarget)) {
      return [index, map.get(pairTarget)];
    } else {
      map.set(nums[index], index);
    }
  }

  return [];
}
