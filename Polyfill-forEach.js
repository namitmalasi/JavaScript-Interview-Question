// Implement the polyfill for the forEach() function in JavaScript.

const array = [1, 2, 3, 4, 5, 6, 7, 8];

Array.prototype.myforEach = function (fn) {
  let obj = this;
  for (let index = 0; index < obj.length; index++) {
    fn(obj[index]);
  }
};

array.myforEach((item) => {
  console.log(item);
});
