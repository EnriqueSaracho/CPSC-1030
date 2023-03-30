const sportOptions = document.getElementsByName("sport");
let sports = [];
const sportsContainer = document.getElementById("sports-container");
const colorOptions = document.getElementById("color");
const colorText = document.getElementById("color-text");

function displaySports() {
  while (sportsContainer.firstChild) {
    sportsContainer.removeChild(sportsContainer.firstChild);
  }
  for (let i = 0; i < sportOptions.length; i++) {
    if (sportOptions[i].checked) {
      sports.push(sportOptions[i].value);
    }
  }
  for (let i = 0; i < sports.length; i++) {
    let para = document.createElement("p");
    para.innerHTML = sports[i];
    sportsContainer.appendChild(para);
  }
  sports = [];
}

function displayColor() {
  colorText.innerHTML = `You selected the color: ${colorOptions.value}`;
}
