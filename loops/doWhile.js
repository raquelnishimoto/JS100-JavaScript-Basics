// What is the difference between the following two code snippets? 


/*
** In this code snippet the block will never be executed.
** this is because in line 10 the expression counter > 0 is falsy
*/
let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}

/*
** In this code snippet the block will be executed at least once
** this is because the evaluation of the condition is done only
** after the block within 'do' is executed. Once the expression
** counter > 0 in line 26 is evaluated falsy that the code terminates.
*/
let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);