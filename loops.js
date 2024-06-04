for (let i = 0; i <= 5; i++) {
  alert(i);
}
let str = "";
for (let i = 0; i <= 5; i++) {
  str += i;
}
alert(str);

for (let i = 0; i <= 20; i = i + 3) {
  console.log(i);
}

while (true) {
  let val = prompt("please Enter a value");
  let parsedVal = parseInt(val, 10);
  if (parsedVal > 100 || parsedVal < 0) alert("Please re-enter a value");
  else {
    alert("Your number is " + parsedVal);
    break;
  }
}

let val = parseInt(
  prompt("Enter a value to return the sum of all the numbers before it"),
  10
);
let sum = 0;
for (let i = 0; i <= val; i++) {
  sum += i;
}
console.log(sum);
