// What will the following code log to the console and why?

/* 
** This code will output 1
** variables initialised outside (the function) is a global veriable
** which means that it is accessed anywhere in the code, including the inner scope
** of the fuction.
*/
let a = 1;

function myFunction() {
  console.log(a);
}

myFunction();