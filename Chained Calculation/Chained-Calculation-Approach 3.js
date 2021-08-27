//  ********Approach 3********
// this approach is also not recommended because everytime we are calling the cal()
// function it is creating new definition of add,sub,val.Therefore it is consuming
// more memory.

function cal(initialValue) {
  var calObj = { add, sub, val };

  function add(num) {
    return cal(initialValue + num);
  }

  function sub(num) {
    return cal(initialValue - num);
  }

  function val() {
    return initialValue;
  }
  return calObj;
}

console.log(cal(10).add(80).sub(40).val());
