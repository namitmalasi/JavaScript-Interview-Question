// ********Approach 4********
// This is an efficient approach.

class Calculator {
  constructor(initialValue) {
    this.accumlator = initialValue;
  }

  add(num) {
    this.accumlator += num;
    return this;
  }

  sub(num) {
    this.accumlator -= num;
    return this;
  }

  val() {
    return this.accumlator;
  }
}

function cal(initialValue) {
  return new Calculator(initialValue);
}

console.log(cal(100).add(80).sub(40).val());
