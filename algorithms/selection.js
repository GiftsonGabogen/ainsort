const arg = require("../plugins/argumentFilter");

let order = "asc";
let by;

let newArr = [];
const selectionsort = arr => {
  if (arr.length === 0) {
    return newArr;
  }
  let smallest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (
      by === undefined
        ? order === "desc"
          ? arr[smallest] < arr[i]
          : arr[smallest] > arr[i]
        : order === "desc"
        ? arr[smallest][by] < arr[i][by]
        : arr[smallest][by] > arr[i][by]
    ) {
      smallest = i;
    }
  }
  newArr.push(arr[smallest]);
  arr.splice(smallest, 1);
  selectionsort(arr);
  return newArr;
};

const selection = (arr, orderArg = [], byArg) => {
  let params = arg(arr, orderArg, byArg);
  order = params.order;
  by = params.by;
  return selectionsort(arr);
};

module.exports = selection;
