const arg = require("../plugins/argumentFilter");
const byArgFilter = require("../plugins/byArgFilter");

let order = "asc";
let by;

function merging(left, right) {
  //create a container named result
  let result = [];
  //while either one of the array has an element run this function
  while (left.length !== 0 && right.length !== 0) {
    //find both of the first element of both array
    //check which is lesser and the lesser element will be shift(remove the first element of an array) out of it's array
    // the shifted array will be added o the result array container on it's most right hand side
    //so that the latest element will be on the right hand side because it is higher number than the previous pushed element
    if (byArgFilter(by, order, left[0], right[0])) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }
  //if one of the array is empty, the array that still have an element will pushed it's remaining element into the result array container
  result = [...result, ...left, ...right];
  return result;
}

const mergesort = arr => {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merging(mergesort(left), mergesort(right));
};

const merge = (arr, orderArg = [], byArg) => {
  let params = arg(arr, orderArg, byArg);
  order = params.order;
  by = params.by;
  return mergesort(arr);
};

module.exports = merge;

//        [4,  8,  9,  6,  2,  10,  13,  12]
//        [4,  8,  9,  6] [2,  10,  13,  12]
//        [4,  8]    |       |        |
//        [4] [8]    |       |        |
//        [4,  8]    |       |        |
//           |    [9, 6]     |        |
//           |    [9][6]     |        |
//           |    [6, 9]     |        |
//           |      |        |        |
//        [4, 8]  [6, 9]     |        |
//        [4, 6, 8, 9]       |        |
//              |        [2, 10]   [13, 12]
//              |        [2][10]   [13][12]
//              |        [2, 10]   [12, 13]
//              |         [2, 10, 12, 13]
//      [4, 6, 8, 9]      [2, 10 ,12, 13]
//      [2,  4,  6,  8,  9,  10,  12,  13]
