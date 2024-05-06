function memoize(fn) {
  const cache = {};
  return (...args) => {
    const arg = JSON.stringify(args);

    if (arg in cache) {
      console.log("fetching from cache");
      return cache[arg];
    } else {
      console.log("fetching for the first time");
      const result = fn.apply(this, args);
      cache[arg] = result;
      return result;
    }
  };
}

const addThreeNums = (a, b, c) => a + b + c;
  
const add = memoize(addThreeNums);
console.time();
console.log(add(1, 2, 3));
console.timeEnd();

console.time();
console.log(add(1, 2, 3));
console.timeEnd();

console.time();
console.log(add(1, 2, 3));
console.timeEnd();
