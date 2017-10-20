//reverse string

function reverse_String(myString) {

let revString = "";

  for(i = myString.length - 1; i >= 0; i--) {
    revString = revString + myString[i];
  }
    console.log(revString);
}

console.log(reverse_String("backwards"));

//This still returns undefinedb and I do not know why, but at least it's reversing the string

//palindrome

function is_palendrome(myString) {
let result = ""
let strLength = (myString.length - 1);
  for(i = 0; i <= strLength; i++) {
    if (myString[i] !== strLength); {
      console.log("Entry is not a palindrome.");
    } else {
      return true
    }
  }
}

is_palendrome("abcddcba");

//for this one I have no clue. I et an error every single time I try to use an else sttement. Not just here, in any function. Very frustrating.
