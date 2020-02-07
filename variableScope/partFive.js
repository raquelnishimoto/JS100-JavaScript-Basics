// What will the following code log to the console and why?

/*
** The code will output an Error indicating that the variable was not initialised.
** the 'a' variable declared in line 14 shadows the 'a' variable declared in line 11.
** Shadowing occurs when two variables in the same scope has the same name.
** let variable is only available after the code runs. In line 14, because of shadowing it is not avaliable yet.
*/

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();