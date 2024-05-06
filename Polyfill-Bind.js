// Implement the polyfill for the Bind() function in JavaScript.

const name1 = {
  firstname: "AJ",
  lastname: "Styles",
};

function printname(hometown, state, country) {
  console.log(
    this.firstname +
      " " +
      this.lastname +
      " " +
      hometown +
      " " +
      state +
      " " +
      country
  );
}

Function.prototype.myBind = function (...args) {
  let obj = this;
  let params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let print = printname.myBind(name1, "Mumbai", "Maharashtra", "india");
print();
