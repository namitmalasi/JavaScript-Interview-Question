function fetchApi() {
  console.log("fetching from api");
}

function getDebouncedData(fn, delay) {
  let timer;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };
}

const debounce = getDebouncedData(fetchApi, 300);
