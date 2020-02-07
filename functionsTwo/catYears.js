// Implement a function catAge that takes a number of human years as input and converts them into cat years. 

/*
** The first human year corresponds to 15 cat years.
** The second human year corresponds to 9 cat years.
** Every subsequent human year corresponds to 4 cat years.
*/

console.log(catAge(0));
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32

// option1
function catAge1(humanAge) {
  let catYears = 0;
  let humanYears = humanAge;

  if (humanYears > 0) {
    catYears += 15;
    humanYears -= 1;
  }
  if (humanYears >= 1) {
    catYears += 9;
    humanYears -= 1;
  }
  while (humanYears > 0) {
    catYears += 4;
    humanYears -= 1;
  }
  return catYears;
}

function catAge(humanAge) {
  switch(humanAge) {
    case 0: return 0;
    case 1: return 15;
    case 2: return 24;
    default: return 24 + ((humanAge - 2) * 4);
  }
}