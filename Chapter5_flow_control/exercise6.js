function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

//logs Not Empty because while the array is empty, it isn't falsy so Javascript executes the first branch of the if statement.