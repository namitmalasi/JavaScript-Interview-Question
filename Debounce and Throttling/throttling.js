function expensive() {
  console.log("i got clicked");
}

function optimisedExpensive(fn, delay) {
  let flag = true;
  return function () {
    if (flag) {
      fn.apply(this, arguments);
      flag = false;

      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
}

const throttling = optimisedExpensive(expensive, 800);
