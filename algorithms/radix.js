const objectMiner = (obj, pass) => {
  let ans;
  let passed = pass.split(".");
  ans = obj[passed[0]];
  for (let i = 1; i < passed.length; i++) {
    ans = ans[passed[i]];
  }
  return ans;
};

const arg = require("../plugins/argumentFilter");
let order = "asc";
let by;

const radixsort = arr => {
  let scanHighest = 0;
  for (i = 0; i < arr.length; i++) {
    let num;
    if (by === undefined) {
      num = parseInt(arr[i]);
    } else {
      num = parseInt(objectMiner(arr[i], by));
    }
    if (num.toString().length > scanHighest) {
      scanHighest = num.toString().length;
    }
  }

  for (x = 0; x < scanHighest; x++) {
    let a = [];
    let b = [];
    let c = [];
    let d = [];
    let e = [];
    let f = [];
    let g = [];
    let h = [];
    let i = [];
    let j = [];
    for (y = 0; y < arr.length; y++) {
      let num;
      if (by === undefined) {
        num = parseInt(arr[y]);
      } else {
        num = parseInt(objectMiner(arr[y], by));
      }
      num = num.toString();
      let numPos = num.length - 1 - x;
      switch (num.charAt(numPos)) {
        case "0":
          a.push(arr[y]);
          break;
        case "1":
          b.push(arr[y]);
          break;
        case "2":
          c.push(arr[y]);
          break;
        case "3":
          d.push(arr[y]);
          break;
        case "4":
          e.push(arr[y]);
          break;
        case "5":
          f.push(arr[y]);
          break;
        case "6":
          g.push(arr[y]);
          break;
        case "7":
          h.push(arr[y]);
          break;
        case "8":
          i.push(arr[y]);
          break;
        case "9":
          j.push(arr[y]);
          break;

        default:
          a.push(arr[y]);
          break;
      }
    }
    if (order === "asc") {
      arr = [...a, ...b, ...c, ...d, ...e, ...f, ...g, ...h, ...i, ...j];
    } else {
      arr = [...j, ...i, ...h, ...g, ...f, ...e, ...d, ...c, ...b, ...a];
    }
  }
  return arr;
};

const radix = (arr, orderArg = [], byArg) => {
  let params = arg(arr, orderArg, byArg);
  order = params.order;
  by = params.by;
  return radixsort(arr);
};

module.exports = radix;
