// Code your solutions in this file
function printBadges(arr) {
  for(let i = 0; i < arr.length; i++) {
    console.log(`Welcome ${arr[i]}! You are employee #${i + 1}.`);
  }

  return arr
}

function tailsNeverFails() {
  let i = 0
  while (true) {
    if(Math.random() >= 0.5) {  break;  }
    i++;
  }
  return `'You got ${i} tails in a row!'`
}
