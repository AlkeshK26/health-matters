const name = "alkesh";
const age = 21;
const weight = 66;
const height = 1.65;

const bmi = (weight / (height * height)).toFixed(2);

document.getElementById("name").textContent = name;
document.getElementById("age").textContent = age;
document.getElementById("weight").textContent = weight + " kg";
document.getElementById("height").textContent = height + " m";
document.getElementById("bmi").textContent = bmi;