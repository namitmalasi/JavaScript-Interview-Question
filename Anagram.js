// Approach 1
function Anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let str11 = str1.split("").sort().join("");
  let str22 = str2.split("").sort().join("");
  if (str11 === str22) {
    return true;
  }
  return false;
}

console.log(Anagram("namit", "timen"));

// Approach 2
const CHAR = 256;
function Anagram(str1, str2) {
  const charArray = new Array(CHAR).fill(0);
  if (str1.length !== str2.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    charArray[str1.charCodeAt(i)]++;
    charArray[str2.charCodeAt(i)]--;
  }

  for (let i = 0; i < CHAR; i++) {
    if (charArray[i] !== 0) return false;
  }

  return true;
}
console.log(Anagram("triangle", "integral"));
