function StorePrimeNumbers(n) {
  /* Function to store first n prime_numbers in an array
Return the array containing the prime numbers */

  let array = [];

  let x = 2;

  while (array.length < n) {
    let flag = true;
    for (let i = 2; i < x; i++) {
      if (x % i === 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      array.push(x);
    }

    x++;
  }
  return array;
}


console.log(StorePrimeNumbers(8))