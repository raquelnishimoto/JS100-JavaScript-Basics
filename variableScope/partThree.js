// What will the following code log to the console and why? 

/*
** The following code will produce a ReferenceError - this is because myValue variable is declared 
** within a block. Therefore, its scope is limited to that block.
** It is not possible to access this variable outside the block where it was initialised.
*/
if (true) {
  let myValue = 20;
}

console.log(myValue);