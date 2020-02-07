/*
** Write code that capitalizes the words in the string 'launch school tech & talk', 
** so that you get the string 'Launch School Tech & Talk'.
*/

function capitaliseWords(string) {
  let words = string.split(' ');
  let capitalised = [];
  for (let i = 0; i < words.length; i++ ) {
    capitalised.push(words[i][0].toUpperCase() + words[i].slice(1));
  }
  return capitalised.join(' ');
}

console.log(capitaliseWords('launch school tech & talk'));