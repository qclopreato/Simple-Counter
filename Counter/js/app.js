
let count = 500;
let decrementAmount = 25;

function event1(){
  count -= decrementAmount;
  console.log(count);
  document.getElementById(`number`).innerHTML = count;
  return;
}

function event2(){
  count += decrementAmount;
  console.log(count);
  document.getElementById(`number`).innerHTML = count;
  return;
  
}
