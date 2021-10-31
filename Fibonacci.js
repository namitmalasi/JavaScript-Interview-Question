// The Fibonacci sequence, also known as Fibonacci numbers, is defined as the sequence of numbers in
// which each number in the sequence is equal to the sum of two numbers before it. The Fibonacci
// Sequence is given as:

// Fibonacci Sequence = 0, 1, 1, 2, 3, 5, 8, 13, 21, ….

// Approach 1(For loop)

function fibonacciSeriesWithForLoop(length) {
  let fibonacciSeries = [0, 1];

  for (let i = 2; i <= length; i++) {
    fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
  }
  return fibonacciSeries;
}

console.log(fibonacciSeriesWithForLoop(8));

// Approach 2(Recursion)

function fibonacciSeriesWithRecursion(length) {
  if (length == 0) {
    return [0];
  } else if (length == 1) {
    return [0, 1];
  } else {
    let fiboSeries = fibonacciSeriesWithRecursion(length - 1);
    let nextElement = fiboSeries[length - 1] + fiboSeries[length - 2];
    fiboSeries.push(nextElement);
    return fiboSeries;
  }
}

console.log(fibonacciSeriesWithRecursion(8));
