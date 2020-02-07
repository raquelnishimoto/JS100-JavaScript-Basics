// Write a function that takes an ISO 639-1 language code and returns a greeting in that language.


function greet(language) {
  switch (language) {
    case 'en': return 'Hi';     
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hej!'
  }
}

console.log(greet('en')); // 'Hi!'
console.log(greet('fr')); // 'Salut!'
console.log(greet('pt')); // 'Olá!'
console.log(greet('de')); // 'Hallo!'
