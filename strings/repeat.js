/* 
** Implement a function repeat that repeats an input string a given number of times, as shown in the example below;
** without using the pre-defined string method String.prototype.repeat().
*/

function repeat(count, string) {
  let repetition = [];
  while(count > 0) {
    repetition.push(string);
    count -= 1;
  }
  return repetition.join('');
}

console.log(repeat(3, 'ha')); // 'hahaha'