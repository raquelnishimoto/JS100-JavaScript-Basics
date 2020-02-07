/*
** Write a function that extracts the language code from a locale. 
** A locale is a combination of a language code, a region, and usually also a character set.
*/

function extractLanguage(locale) {
  return locale.split('_')[0]
}

function extractRegion(locale) {
  return locale.split(/[_.]/)[1];
}

console.log(extractLanguage('en_US.UTF-8'));  // 'en'
console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'

console.log(extractRegion('en_US.UTF-8'));  // 'US'
console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
console.log(extractRegion('ko_KR.UTF-16')); // 'KR'