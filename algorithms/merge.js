const arg = require("../plugins/argumentFilter");
const byArgFilter = require("../plugins/byArgFilter");

let order = "asc";
let by;

const MergeSort = ArrayArg => {
  let copy = ArrayArg.slice();
  const unmerge = (arr, temp, leftStart, rightEnd) => {
    if (leftStart >= rightEnd) {
      return;
    }
    let center = Math.floor((leftStart + rightEnd) / 2);
    unmerge(arr, temp, leftStart, center);
    unmerge(arr, temp, center + 1, rightEnd);
    merge(arr, temp, leftStart, rightEnd);
    return arr;
  };
  const merge = (arr, temp, leftStart, rightEnd) => {
    let leftEnd = Math.floor((rightEnd + leftStart) / 2);
    let rightStart = leftEnd + 1;
    let size = rightEnd - leftStart + 1;

    let left = leftStart;
    let right = rightStart;
    let index = leftStart;
    while (left <= leftEnd && right <= rightEnd) {
      if (byArgFilter(by, order, arr[right], arr[left])) {
        temp[index] = arr[left];
        left++;
      } else {
        temp[index] = arr[right];
        right++;
      }
      index++;
    }
    if (left <= leftEnd) {
      let insert = arr.slice(left, leftEnd + 1);
      temp.splice(index, rightEnd - index + 1, ...insert);
    }
    arr.splice(leftStart, size, ...temp.slice(leftStart, rightEnd + 1));

    temp = arr.slice();
  };
  return unmerge(ArrayArg, copy, 0, ArrayArg.length - 1);
};

const merge = (arr, orderArg = [], byArg) => {
  let params = arg(arr, orderArg, byArg);
  order = params.order;
  by = params.by;
  return MergeSort(arr);
};

module.exports = merge;
