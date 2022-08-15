function copyObj(sourceObject, keys) {
  let destinationObject = {
       foo: 1,
       bar: 2,
       qux: 3,
  };

  if (keys) {
    keys.forEach(function(key) {
      destinationObject[key] = sourceObject[key];
    });

    return destinationObject;
  } else {
    return Object.assign(destinationObject, sourceObject);
  }
}

console.log(copyObj());