// Check if the string is palindrome or not.

// A string is said to be palindrome if reverse of the string is same as string.
// For example, “abba” is palindrome,but “abbc” is not palindrome.

const isPalindrome = (str) => {
  let revStr = "";
  for (let item = str.length - 1; item >= 0; item--) {
    revStr += str[item];
  }
  if (str === revStr) return "Palindrome";
  else return "Not Palindrome";
};

console.log(isPalindrome("abba"));
console.log(isPalindrome("namit"));
