// Create a function Calculator that should take one initial value.
// Chain calculation like add,sub on it.
// Return the calculated value on invocation of val function at the end of the chain.

// eg:
// input: cal(2).add(5).sub(4).val();
// output:(2+5-4)=> 3

// Approach 1:(This method is not recommended as it pollutes the global environment.)

function cal(initialValue) {
  var acc = initialValue;
console.log(this)
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
console.log(this);
