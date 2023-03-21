// alert("Hello");
console.log("Hello World!!");

let radius = 5;
const PI = 3.14;
let area = PI * radius * radius;
// alert("The area of the circle is: " + area);
// alert(`The area of the circle is: ${area}`);
console.log(`The area of the circle is: ${area}`);

// document.write(`The area of the circle is: ${area}`);

let string1 = "Anu";

let result;
result = radius / "10";
console.log(result);
console.log(radius);
let para = document.getElementById("para1");
console.log(para);
para.innerHTML = `The area of the circle with radius ${radius} is ${area}`;

// function changeColor() {}

const changeColor = () => {
  document.body.style.backgroundColor = "blue";
  //   let firstHeading = document.getElementById("heading");
  let firstHeading = document.querySelector("#heading");
  firstHeading.style.color = "red";
};
