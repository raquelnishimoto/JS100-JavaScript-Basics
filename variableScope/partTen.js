// What will the following code log to the console and why?

/*
** The code will output the object mutated to {firstName: 'Jane', lastName: 'Doe'}
** The property of object a is reassigned to a new value
** but the variable a still references the same object.
** In JavaScript objects are mutable.
*/

const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);