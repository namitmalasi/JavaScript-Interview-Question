// ********Approach 1********
// This method is not recommended as it pollutes the global environment.

function cal(initialValue) {
  var acc = initialValue;

  this.add = function add(num) {
    acc += num;
    return this;
  };

  this.sub = function sub(num) {
    acc -= num;
    return this;
  };

  this.val = function val() {
    return acc;
  };
  return this;
}

console.log(cal(10).add(80).sub(40).val());
