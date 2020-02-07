// What will the following code log to the console and why?

/*
** it will output false.
** this is because variable b assigned to 'true' in the inner scope is not accessible 
** outside the block.
*/
let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);