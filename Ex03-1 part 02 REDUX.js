//String Encryption

function rotate_encryption(myString,integer) {
  let x = 0;
  let encrypt = "";

  for(i = 0; i < myString.length; i++) {
    x = myString.charCodeAt(i);
    x = x + integer;
    if( x >= 65 || x <= 90 ) {
      encrypt = encrypt + String.fromCharCode(x);
    } else {
        if( x > 90 ) {
          x = x - 26;
          encrypt = encrypt + String.fromCharCode(x);
      }
    }
  }
  return encrypt;
}

console.log(rotate_encryption("BooShniggins", 3));
console.log(rotate_encryption("ZyzzyX", 3));
console.log(rotate_encryption("AAAB", 3));
console.log(rotate_encryption("aaab", 3));

//Alrighty, almost there. Still having trouble with the else statement. It works this time, but isn't doing the (x - 26) math to wrap around.
