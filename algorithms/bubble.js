const arg = require("../plugins/argumentFilter");

let order = "asc";
let by;

const bubblesort = arr => {
  let highest = arr.length - 1;
  let sethigh;
  for (let j = arr.length - 1; j > 0; j--) {
    //compare indexes two by two
    //swap the two indexes if the right one is lower
    for (let i = 0; i < highest; i++) {
      if (
        by === undefined
          ? order === "asc"
            ? arr[i] > arr[i + 1]
            : arr[i] < arr[i + 1]
          : order === "asc"
          ? arr[i][by] > arr[i + 1][by]
          : arr[i][by] < arr[i + 1][by]
      ) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        //get track on the last swap
        //if there is no swapping happened it means the right side of the array is sorted
        //set the last swap index into sethigh so that on the next iterate, it wont iterate on the last swap because the right side of it is already sorted
        sethigh = i;
      }
    }
    //set the very last swap to highest so that it's right side indexes will not be iterated
    //it will save time if the already sorted array will not be iterated again
    highest = sethigh;
  }
  return arr;
};

const bubble = (arr, orderArg, byArg) => {
  let params = arg(arr, orderArg, byArg);
  order = params.order;
  by = params.by;
  return bubblesort(arr);
};

module.exports = bubble;
