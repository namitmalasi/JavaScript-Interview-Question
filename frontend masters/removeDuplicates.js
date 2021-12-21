function removeDuplicates(str) {
  const arr = str.split(" ");
  const newSet = new Set(arr);
  const newStr = [...newSet].join(" ");
  return newStr;
}

console.log(removeDuplicates("this is a is test sample test sample test"));
