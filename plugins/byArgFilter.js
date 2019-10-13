//it search the array based on given by
const objectMiner = (obj, pass) => {
  //example: pass = "name.num[0]"
  //it's gonna be this = ["name", "num[0]"]
  let passed = pass.split(".");
  //this whole thing will make this = ["name", "num[0]"] to this = ["name", "[num,0]"]
  if (pass.search("]") >= 0) {
    let newPassed = [];
    let NewSplitted;
    for (let j = 0; j < passed.length; j++) {
      if (passed[j].search("]") >= 0) {
        New = passed[j].replace(/]/g, "");
        New = New.replace(/\[/g, " ");
        NewSplitted = New.split(" ");
      } else {
        NewSplitted = passed[j];
      }
      newPassed.push(NewSplitted);
    }
    passed = newPassed;
  }

  let ans;
  //if an element of the converted pass which is this = [name,[num,0]] is type object
  //it will run this code which will turn this into [name,num[0]]
  //this might be turn the converted pass into the original pass which is on line 4 of this code
  //but this time it is not string, which is we can call the deeper elements within the given obj
  //example: if we use num[0] from [name,num[0]] on the given obj = {num:[2,1]} it will fetch the number 2

  if (typeof passed[0] === "object") {
    ans = obj[passed[0][0]];
    for (let k = 1; k < passed[0].length; k++) {
      ans = ans[passed[0][k]];
    }
  } else {
    ans = obj[passed[0]];
  }

  for (let i = 1; i < passed.length; i++) {
    if (typeof passed[i] === "object") {
      ans = ans[passed[i][0]];
      for (let l = 1; l < passed[i].length; l++) {
        ans = ans[passed[i][l]];
      }
    } else {
      ans = ans[passed[i]];
    }
  }
  return ans;
};

const byArgFilter = (by, order, arrLeft, arrRight) => {
  if (by === undefined) {
    //compare indexes two by two
    //swap the two indexes if the right one is lower
    //depends on the algorithm
    //honestly, my commenting is messed up sorry
    if (order === "asc") {
      return arrLeft > arrRight;
    } else {
      return arrLeft < arrRight;
    }
  } else {
    if (order === "asc") {
      //for filtering the given object using the passed by argument
      //the objectMiner will search the object's(arrLeft or arrRight) element(by), given on it's first argument
      //example: arrLeft = {name:{numbers:[12345,67890]}} by = "name.numbers[1]", it will return 67890
      //and Compare them which is greater or lesser and then return a boolean which will be the basis of sorting depends on the sorting algorithm
      return objectMiner(arrLeft, by) > objectMiner(arrRight, by);
    } else {
      return objectMiner(arrLeft, by) < objectMiner(arrRight, by);
    }
  }
};

module.exports = byArgFilter;
