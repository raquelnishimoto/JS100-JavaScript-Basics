// Write code that checks whether the string byteSequence contains the character x.

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

// console.log(byteSequence.includes('x'));

function include(char, string) {
  for (let i = 0; i < string.length; i++) {
    if (byteSequence[i] === char) {
      return true;
    }
  }
  return false;
}

console.log(include('x', byteSequence));
console.log(include('.', byteSequence));