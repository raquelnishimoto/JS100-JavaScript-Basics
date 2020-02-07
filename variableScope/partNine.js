// What will the following code log to the console and why?

/*
** This code will produce a TypeError because a variable const cannot be
** reassigned to any other value, once it is initialised and assigned to a value already.
*/

const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);