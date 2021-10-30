// Factorial of a non-negative integer, is multiplication of all integers smaller than or equal to n.

// For example factorial of 6 is 6*5*4*3*2*1 which is 720.

// Approach 1(For loop)

function factorialWithFoorLoop(num) {
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
}
console.log(factorialWithFoorLoop(10));

// Approach 2(While loop)

function factorialWithWhileLoop(num) {
  let result = 1;
  while (num > 0) {
    result *= num;
    num--;
  }
  return result;
}

console.log(factorialWithWhileLoop(5));

// Approach 3(Recursive)

function factorialWithRecursion(num) {
  if (num == 0) return 1;
  else return num * factorialWithRecursion(num - 1);
}
console.log(factorialWithRecursion(10));
