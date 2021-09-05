// Reversing a String in JavaScript.

// Approach1

function reverse(str) {
  return str.split("").reverse().join("");
}

console.log(reverse("Namit"));

// Approach 2(Using ES6 syntax)

function reverse(str) {
  return [...str].reverse().join("");
}

console.log(reverse("Namit"));

// Approach3(Without using in-built methods)

function reverse(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString = newString + str[i];
  }
  return newString;
}
console.log(reverse("Namit"));

// Approach4(using recursion)

function reverse(str) {
  if (str === "") {
    return "";
  }
  return reverse(str.substr(1)) + str.charAt(0);
}
console.log(reverse("Namit"));

// Approach5(Using reduce function)

function reverse(str) {
  return str.split("").reduce((acc, item) => item + acc, "");
}
console.log(reverse("Namit"));
