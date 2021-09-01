// Implement the polyfill for the Map() function in JavaScript.

const array = [1, 2, 3, 4, 5, 6, 7, 8];

Array.prototype.myMap = function (fn) {
  newArray = [];
  let obj = this;
  for (let index = 0; index < obj.length; index++) {
    newArray.push(fn(obj[index]));
  }
  return newArray;
};

const output = array.myMap((item) => {
  return item;
});

console.log(output);
