/*
** Given strings like the following, how can you check whether they're equal 
** irrespective of whether the characters they contain are upper or lower case?
*/

function compare(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase();
}

let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

console.log(compare(string1, string2));
console.log(compare(string1, string3));
console.log(compare(string2, string3));