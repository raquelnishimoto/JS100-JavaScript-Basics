// Write a function that returns the first element of an input array. 

console.log(first(['Earth', 'Moon', 'Mars'])); // 'Earth'

function first(array) {
  return array[0];
}

/* What would you return if the input array was empty?
** if the array was empty the expression first([]) would return 'undefined',
** since the array element is outside the bounds of the array
*/