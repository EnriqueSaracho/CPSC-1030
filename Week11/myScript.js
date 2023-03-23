// alert("Hello");
// console.log("Hello World!!");

let radius = 5;
const PI = 3.14;
let area = PI * radius * radius;
// alert("The area of the circle is: " + area);
// alert(`The area of the circle is: ${area}`);
// console.log(`The area of the circle is: ${area}`);

// document.write(`The area of the circle is: ${area}`);

let string1 = "Anu";

let result;
result = radius / "10";
// console.log(result);
// console.log(radius);
let para = document.getElementById("para1");
// console.log(para);
para.innerHTML = `The area of the circle with radius ${radius} is ${area}`;

// function changeColor() {}

const changeColor = () => {
  // document.body.style.backgroundColor = "blue";
  // //   let firstHeading = document.getElementById("heading");
  // let firstHeading = document.querySelector("#heading");
  // firstHeading.style.color = "red";
  alert("You clicked the button, Congrats!");
};

// Adding two numbers with prompts
// let num1, num2, sum;
// num1 = prompt("Enter first number");
// num2 = prompt("Enter second number");
// num1 = parseInt(num1);
// num2 = parseInt(num2);
// sum = num1 + num2;
// alert(`The sum of ${num1} + ${num2} = ${sum}`);

function calculateSum() {
  let num1 = +document.getElementById("num1").value;
  let num2 = parseInt(document.getElementById("num2").value);
  let sum = num1 + num2;
  document.getElementById("sum").value = sum;
}
