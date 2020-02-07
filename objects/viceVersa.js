// Write code that does the reverse, starting from a nested array of pairs and building an object.

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let object = {}

nestedArray.map(array => object[array[0]] = array[1]);
console.log(object);