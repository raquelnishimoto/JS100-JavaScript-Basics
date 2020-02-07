// Create a function removeLastChar that takes a string as argument, and returns the string without the last character.

console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'

// option 1
function removeLastChar1(string) {
  let chars = string.split('');
  chars.pop();
  return chars.join('');
}

// option 2
function removeLastChar(string) {
  return string.substring(0, string.length - 1);
}