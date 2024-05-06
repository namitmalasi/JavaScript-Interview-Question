// Given a String, create a function on String that converts the first character 
// of each word to Uppercase and rest characters are lowercase.

/* 
Input:
sampleString="hello My name is NAMIT"

Output:
"Hello My Name Is Namit"
*/

// Approach 1

String.prototype.toCapitalize = function () {
  const words = this.split(" ");
  let tempArray = [];
  for (let i = 0; i < words.length; i++) {
    let word =
      words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    tempArray.push(word);
  }

  return tempArray.join(" ");
};

console.log("hello My name is NAMIT".toCapitalize());

// Approach 2

String.prototype.toCapitalize = function () {
  return this.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

console.log("hello My name is NAMIT".toCapitalize());
