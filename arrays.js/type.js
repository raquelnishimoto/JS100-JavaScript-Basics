/*
** How can you check whether a variable holds a value that is an array? 
** For example, imagine you start writing a function and want to check whether 
** its argument is an array:
*/

function filter(input) {
  // Is input an array?
  let inputArray = Array.isArray(input);
  console.log(inputArray);
}

filter('[1, 2]');
filter([1, 2]);