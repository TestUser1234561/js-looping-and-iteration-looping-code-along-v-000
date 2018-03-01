// Code your solutions in this file
function printBadges(arr) {
  for(let i = 0; i < arr.length; i++) {
    console.log(`Welcome ${arr[i]}! You are employee #${i + 1}.`);
  }

  return arr
}

function tailsNeverFails() {
  let tails = true
  let i = 0
  while (tails) {
    let test = Math.random()
    console.log(test)
    if(test >= 0.5) {  tails = false;  }
    i++;
  }
  return `'You got ${i} tails in a row!'`
}
