const arg = require("../plugins/argumentFilter");

let order = "asc";
let by;

const quicksort = (arr, start, end) => {
  // if the partition get into it's smallest part which is One Element only in an array
  if (start < end) {
    let index = partition(arr, start, end);
    //quicksort again the left side of the sorted array
    quicksort(arr, start, index - 1);
    //quicksort again the right side of the sorted array
    quicksort(arr, index + 1, end);
  }
  return arr;
};

const partition = (arr, start, end) => {
  let pivot = arr[end];
  let pindex = start;
  for (let i = start; i < end; i++) {
    //if the element i is less than the pivot
    //swap the index to that i element
    if (
      by === undefined
        ? order === "desc"
          ? arr[i] > pivot
          : arr[i] < pivot
        : order === "desc"
        ? arr[i][by] > pivot[by]
        : arr[i][by] < pivot[by]
    ) {
      let temp = arr[pindex];
      arr[pindex] = arr[i];
      arr[i] = temp;
      pindex++;
    }
  }
  //swap the pivot to the last index and return it to be the middle
  //so that it would be the basis to know where the left and the right indexes that we will sort again recursively
  let temp = arr[pindex];
  arr[pindex] = arr[end];
  arr[end] = temp;

  return pindex;
};

const quick = (arr, orderArg = [], byArg) => {
  let params = arg(arr, orderArg, byArg);
  order = params.order;
  by = params.by;
  return quicksort(arr, 0, arr.length - 1);
};

module.exports = quick;
