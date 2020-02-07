// What will the following code log to the console and why?

/*
** the console will output 2. This is because myFuction is called and explicity
** passed in an arguments of value 2. The variable b is then assigned to the parameter which initialises
** a variable of name a. Inside the function this variable a which is assigned the value of b, is printed to the console
*/

let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);