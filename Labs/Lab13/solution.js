//////////////Solution 1//////////////////////
function tipAmount() {
  let amount = document.getElementById("amount").value;
  let tip = amount * 0.2;
  document.getElementById("result").innerHTML = `Tip on $${amount} is: $${tip}`;
}

//////////////Solution 2//////////////////////
function changeColor(color) {
  if (color == "yellow") {
    document.body.style.backgroundColor = "yellow";
  } else {
    document.body.style.backgroundColor = "green";
  }
}

//////////////Solution 3//////////////////////
function calculateTemp() {
  let fahr, cels;
  fahr = prompt("Enter Fahrenheit temperature");
  cels = ((fahr - 32) / 1.8).toFixed(0);
  alert(`Celsius temperature is ${cels}`);
}

//////////////Solution 4//////////////////////
function calculateValues(option) {
  let num1, num2, result;
  num1 = +document.getElementById("number1").value;
  num2 = +document.getElementById("number2").value;
  switch (option) {
    case "add":
      result = num1 + num2;
      document.getElementById("answer").value = result;
      break;
    case "sub":
      result = num1 - num2;
      document.getElementById("answer").value = result;
      break;
    case "mult":
      result = num1 * num2;
      document.getElementById("answer").value = result;
      break;
    case "div":
      result = num1 / num2;
      document.getElementById("answer").value = result;
      break;
    case "clear":
      document.getElementById("number1").value = "0";
      document.getElementById("number2").value = "0";
      document.getElementById("answer").value = "";
      break;
  }
}
