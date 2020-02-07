/*
** Write a function that checks whether or not a particular destination is included within destinations, 
** without using the built-in method Array.prototype.includes().
*/

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false

// option1
function contains1(destination, options) {
  let result = false;
  options.forEach(city => {
    if (city === destination) {
      result = true;
    } 
  });
  return result;
}

// option2
function contains2(destination, options) {
  for (let i = 0; i < options.length; i++) {
    if (options[i] === destination) {
      return true;
    }
  }
  return false;
}

//option3
function contains(destination, options) {
  return options.indexOf(destination) >= 0;
}