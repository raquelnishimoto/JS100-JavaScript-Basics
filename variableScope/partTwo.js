// What will the following code log to the console and why?

/*
** This code will produce a ReferenceError - this is because let variables are not initialised
** until their definition is evaluated.
*/
console.log(greeting);

let greeting = 'Hello world!';