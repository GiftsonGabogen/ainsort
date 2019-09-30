const output = (arr, orderArg, byArg) => {
  let by;
  let order;
  if (typeof arr !== "object") {
    return {
      message: `You should pass an array to the first argument, the type you pass is ${typeof arr}`,
      error: true
    };
  }

  if (orderArg[0] - orderArg[1] > 0) {
    order = "desc";
  } else {
    order = "asc";
  }

  // if there is no third argument passed(reference to where to base the sorting) the sorting will based on the element itself
  // but if the array passed is an object you need to pass the object's property to know where the sort basis is
  // the passed argument should be string
  if (byArg) {
    if (!arr[0][byArg]) {
      return {
        message: `the property ${byArg} was not found on your Array's Element`,
        error: true
      };
    } else {
      by = byArg;
    }
  }
  return { order: order, by: by };
};

module.exports = output;
