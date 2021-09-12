// Approach 1(Naive)

var fizzBuzz = function (n) {
  let resultArray = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      resultArray[i - 1] = "FizzBuzz";
    } else if (i % 5 === 0) {
      resultArray[i - 1] = "Buzz";
    } else if (i % 3 === 0) {
      resultArray[i - 1] = "Fizz";
    } else {
      resultArray[i - 1] = i.toString();
    }
  }
  return resultArray;
};

// Approach2(optimised)

let fizzBuzz = (n) => {
  let hashMap = new Map();
  let arr = [];

  hashMap.set(3, "Fizz");
  hashMap.set(5, "Buzz");

  for (let i = 1; i <= n; i++) {
    let output = "";
    for (let key of hashMap.keys()) {
      if (i % key == 0) {
        output += hashMap.get(key);
      }
    }
    if (output == "") {
      output = i.toString();
    }
    arr.push(output);
  }
  return arr;
};
