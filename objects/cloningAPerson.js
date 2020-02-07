// Write a function clone that takes an object as argument and returns a shallow copy of that argument.

function clone(obj) {
  // TODO
  return Object.assign({}, obj); 
}

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
}

clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33