const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

/* no error occurs because line 3 is inside block scope making
it a separate entity*/