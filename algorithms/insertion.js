const arg = require("../plugins/argumentFilter");

let order = "asc";
let by;

const insertionsort = (arr, num) => {
  let hole = num;
  let value = arr[num];
  for (let i = num; i > 0; i--) {
    if (
      by === undefined
        ? order === "desc"
          ? value > arr[i - 1]
          : value < arr[i - 1]
        : order === "desc"
        ? value[by] > arr[i - 1][by]
        : value[by] < arr[i - 1][by]
    ) {
      arr[hole] = arr[i - 1];
      hole = i - 1;
    } else {
      break;
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
