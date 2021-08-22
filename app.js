const outputBox = document.querySelector(".output");
const inputBox = document.querySelector("#salaryNum");
const salarynumLabelBox = document.querySelector("#salaryNum_label")
const imageBox = document.querySelector("#garcias");

document.querySelector("footer").innerHTML += new Date().getFullYear();

let x = 0;

function sayHi() {
    x++;
    outputBox.innerHTML = x;
    imageBox.style.display = "none";
}

function sayBye() {
    x--;
    outputBox.innerHTML = x;
    imageBox.style.display = "block";
}

function load() {
    x = inputBox.value;
    outputBox.innerHTML = x;
}