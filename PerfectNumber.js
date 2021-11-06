// Perfect number is a positive integer that is equal to the sum of its positive divisors, excluding
// the number itself. For instance, 6 has divisors 1, 2 and 3 (excluding itself),
// and 1 + 2 + 3 = 6, so 6 is a perfect number.

function isPerfectNumber(number) {
  let temp = number;
  let sum = 0;
  for (let i = 1; i <= temp / 2; i++) {
    if (temp % i === 0) sum += i;
  }
  if (sum === number) {
    return `${number} is a Perfect number.`;
  } else {
    return `${number} is not a Perfect number.`;
  }
}

console.log(isPerfectNumber(6));
console.log(isPerfectNumber(28));
console.log(isPerfectNumber(5));
console.log(isPerfectNumber(496));
