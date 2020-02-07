/*
** Create a function that calculates a person's body mass index (BMI). 
** It should take two parameters: someone's height (in cm) and weight (in kg). 
*/

// bmi = weightInKilograms / heightInMeters**2;

// Round the result to two decimals.

console.log(calculateBMI(180, 80)); // 24.69

function calculateBMI(height, weight) {
  let bmi = weight / height ** 2;
  return (bmi * 10000).toFixed(2);

}