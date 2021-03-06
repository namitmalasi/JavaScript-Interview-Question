function debounce(fn, delay) {
  let timer;
  return function () {
    // console.log(this);
    // console.log(arguments);
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };
}

const getData = () => {
  console.log("calling...");
};

console.log(debounce(getData, 500));
