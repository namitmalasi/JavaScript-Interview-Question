// ********Approach 2********

function cal(initialValue) {
  var acc = initialValue;
  var calObj = { add, sub, val };

  function add(num) {
    acc += num;
    return calObj;
  }

  function sub(num) {
    acc -= num;
    return calObj;
  }

  function val() {
    return acc;
  }
  return calObj;
}
console.log(cal(10).add(80).sub(40).val());
