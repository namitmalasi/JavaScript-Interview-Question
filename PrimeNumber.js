//  Prime numbers are the numbers, which are only divisible by 1 and the number itself.
// for example--> 5,7,11,13...

function isPrime(num) {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      return `${num} is not a prime number`;
    }
  }
  return `${num} is a prime number`;
}

console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(11));
console.log(isPrime(19));
