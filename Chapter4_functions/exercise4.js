function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

/*Nothing is logged.The return on line 3 terminates the function before
it can log anything*/
