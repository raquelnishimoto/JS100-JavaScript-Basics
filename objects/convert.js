// Convert the person object into a nested array nestedPerson, containing the same key-value pairs.

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
}

let arrays = Object.entries(person);
arrays.forEach( array => console.log(array));