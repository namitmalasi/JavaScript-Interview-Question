const firstNonRepeatingCharacter = (str) => {
  let obj = {};

  for (let item of str) {
    if (obj[item]) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  }

  for (let item in obj) {
    if (obj[item] === 1) {
      // return str.indexOf(item);
      return item;
    }
  }
  return -1;
};

console.log(firstNonRepeatingCharacter("namit"));
console.log(firstNonRepeatingCharacter("aabbccdd"));
