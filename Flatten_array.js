// Given a deeply nested array,create a function on the array that returns the flat version of the original array.
/*
Input:
array=[1,2,3,[4,5],6,[7,8,9,[10,11]]]

Output:
result=[1,2,3,4,5,6,7,8,9,10,11]
*/

// Approach 1:

function flatten_the_array() {
  const result_array = [];
  function process_array(array) {
    for (let index = 0; index < array.length; index++) {
      let arrayElement = array[index];
      if (Array.isArray(arrayElement)) {
        process_array(arrayElement);
      } else {
        result_array.push(arrayElement);
      }
    }
  }
  process_array(this);
  return result_array;
}

input = [1, 2, 3, [4, [5]], 6, [7, 8, 9, [10, 11]]];
Array.prototype.flatten_the_array = flatten_the_array;
console.log(input.flatten_the_array());


// Approach 2:

function flatten_the_array(array) {
  let somenewArray = array.reduce((acc, ele) => {
    if (Array.isArray(ele)) {
      acc = acc.concat(flatten_the_array(ele));
    } else {
      acc = [...acc, ele];
    }
    return acc;
  }, []);
  return somenewArray;
}

input = [1, 2, 3, [4, [5]], 6, [7, 8, 9, [10, 11]]];
console.log(flatten_the_array(input));

// Approach 3

function flatten_the_array() {
  const result_array = [];
  let depth = 0;
  if (arguments[0] === undefined) {
    depth = 1;
  } else {
    depth = arguments[0];
  }
  function process_array(array, depth) {
    for (let index = 0; index < array.length; index++) {
      let arrayElement = array[index];
      if (Array.isArray(arrayElement) && depth > 0) {
        process_array(arrayElement, depth - 1);
      } else {
        result_array.push(arrayElement);
      }
    }
  }
  process_array(this, depth);
  return result_array;
}

input = [1, 2, 3, [4, [5]], 6, [7, 8, 9, [10, 11]]];
Array.prototype.flatten_the_array = flatten_the_array;
console.log(input.flatten_the_array());
