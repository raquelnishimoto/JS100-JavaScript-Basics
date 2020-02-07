/*
** Building on your solutions from the previous exercises, 
** write a function localGreet that takes a locale as input, and returns a greeting. 
** The locale allows us to greet people from different countries differently also when they share the language
*/

function extractLanguage(locale) {
  return locale.split('_')[0]
}

function extractRegion(locale) {
  return locale.split(/[_.]/)[1];
}

function greet(language) {
  switch (language) {
    case 'en': return 'Hi'; 
    case 'en_US': return 'Hey!';
    case 'en_GB': return 'Hello!';  
    case 'en_AU': return 'Howdy!'; 
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hej!'
  }
}

// function localGreet(locale) {
//   let language = extractLanguage(locale);
//   let region = extractRegion(locale);

//   if (language === 'en') {
//     return greet(language + '_' + region);
//   } else {
//     return greet(language);
//   }
// }

function localGreet(locale) {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);

  switch(region) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    default: return greet(language);
  }
}


console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'