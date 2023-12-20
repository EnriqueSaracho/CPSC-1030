function findGreater() {
  let num1, num2, result;
  num1 = +document.getElementById("num1").value;
  console.log(num1);
  num2 = +document.getElementById("num2").value;
  if (num1 > num2) {
    result = "number 2";
  } else {
    result = "number 2";
  }
  document.getElementById("result").innerHTML = result;
}

// loops
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 10; i > 0; i--) {
  console.log(i);
}

let j = 0;
while (j <= 10) {
  console.log(j);
  j = j + 2;
}

let scores = [34, 35, 23, 65, 87];

for (let i = 0; i < scores.length; i++) {
  scores[i] += 5;
}

for (let i = 0; i < scores.length; i++) {
  console.log(scores[i]);
}
