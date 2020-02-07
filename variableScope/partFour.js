// What will the following code log to the console and why?

/*
** the code will output 1 and return 'undefined' when the function is invoked.
** The variable a is defined within the function and its scope extends to inner blocks as well. 
*/

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();