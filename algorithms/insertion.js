const arg = require("../plugins/argumentFilter");
const byArgFilter = require("../plugins/byArgFilter");

let order = "asc";
let by;

const insertionsort = (arr, num) => {
  let hole = num;
  let value = arr[num];
  for (let i = num; i > 0; i--) {
    if (byArgFilter(by, order, value, arr[i - 1])) {
      break;
    } else {
      arr[hole] = arr[i - 1];
      hole = i - 1;
    }
  }
  arr[hole] = value;
  if (arr.length - 1 > num) {
    insertionsort(arr, num + 1);
  }

  return arr;
};

const insertion = (arr, orderArg = [], byArg) => {
  let params = arg(arr, orderArg, byArg);
  order = params.order;
  by = params.by;
  return insertionsort(arr, 1);
};

module.exports = insertion;
