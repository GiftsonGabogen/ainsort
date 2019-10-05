const insertionsort = (arr, num) => {
  let hole = num;
  let value = arr[num];
  for (let i = num; i > 0; i--) {
    if (value < arr[i - 1]) {
      arr[hole] = arr[i - 1];
      hole = i - 1;
    } else {
      break;
    }
  }
  arr[hole] = value;
  if (arr.length - 1 > num) {
    insertionsort(arr, num + 1);
  } else {
    return arr;
  }
};

const insertion = arr => {
  insertionsort(arr, 1);
  return arr;
};

module.exports = insertion;
