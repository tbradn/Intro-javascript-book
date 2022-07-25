console.log('5' + 10);
/* code logs 510 instead of 15 because every + expression that has
a string produces a string result. 10 get coerced to a string and then
gets concatenated to the string '5'. */
