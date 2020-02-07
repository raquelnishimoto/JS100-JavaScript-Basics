// Predict the output of the below code. When you run the code, do you see what you expected? Why or why not?

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);

/*
** the strict comparison will result evaluate to 'false'
** according to documentation two distinct objects are never equal 
** including in abstract comparison as well
*/