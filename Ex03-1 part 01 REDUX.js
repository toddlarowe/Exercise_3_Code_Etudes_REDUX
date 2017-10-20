//Sum Range Function

function sum_range(x,y) {

let sum = 0

  for(let i = 0; i < (y - x) + 1; i++) {
    sum = sum + (x + i);
  }  return sum;
}

//should be 25
console.log(sum_range(3,7));

//Okay, got it :)r
