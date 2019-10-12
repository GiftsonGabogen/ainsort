//it search the array based on given by
const objectMiner = (obj, pass) => {
  let ans;
  let passed = pass.split(".");
  ans = obj[passed[0]];
  for (let i = 1; i < passed.length; i++) {
    ans = ans[passed[i]];
  }
  return ans;
};

const byArgFilter = (by, order, arrLeft, arrRight) => {
  if (by === undefined) {
    //compare indexes two by two
    //swap the two indexes if the right one is lower
    //depends on the algorithm
    //honestlt my commenting is messed up sorry
    if (order === "asc") {
      return arrLeft > arrRight;
    } else {
      return arrLeft < arrRight;
    }
  } else {
    if (order === "asc") {
      return objectMiner(arrLeft, by) > objectMiner(arrRight, by);
    } else {
      return objectMiner(arrLeft, by) < objectMiner(arrRight, by);
    }
  }
};

module.exports = byArgFilter;
