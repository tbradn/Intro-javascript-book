let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// program logs 'bar' because 'qux' is inside the block scope