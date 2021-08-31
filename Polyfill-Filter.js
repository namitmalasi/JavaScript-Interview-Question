// Implement the polyfill for the Filter() function in JavaScript.

const array = [1, 2, 3, 4, 5, 6, 7, 8];

Array.prototype.myFilter = function (fn) {
  newArray = [];
  let obj = this;
  for (let index = 0; index < obj.length; index++) {
    if (fn(obj[index])) {
      newArray.push(obj[index]);
    }
  }
  return newArray;
};

const output = array.myFilter((item) => {
  return item % 2 === 0;
});

console.log(output);
