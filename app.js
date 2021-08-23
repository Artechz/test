
const salaryTypeBox = document.querySelector("#salaryType");
const payNumBox = document.querySelector("#payNum");
const outputBox = document.querySelector(".output");
const salaryNumBox = document.querySelector("#salaryNum");
const userCABox = document.querySelector("#userCA")

const imageBox = document.querySelector("#garcias");

document.querySelector("#footer").innerHTML += new Date().getFullYear();

let x = 0;
let payNum, salaryType, salaryNum, userCA;

let tramosIRPF_estado = [
    [0, 9.5],
    [12450, 12],
    [20200, 15], 
    [35200, 18.5],
    [60000, 22.5],
    [300000, 24.5]
];
let tramosIRPF_CA = [
    ["General", [0, 9.5], [12450, 12], [20200, 15], [35200, 18.5], [60000, 22.5], [300000 ,22.5]],
    ["Catalunya", [0, 12], [1707.20, 14], [33007.20, 18.5], [53407.20, 21.5], [90000, 23.5], [120000, 24.5], [175000, 25.5]]
];
console.log(tramosIRPF_CA[0][0])

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

function salaryInfoChange() {
    userCA = userCABox.value;
    payNum = payNumBox.value;
    switch (salaryTypeBox.value) {
        case "yearly":
            salaryType = 1;
            break;
        case "monthly":
            salaryType = 12; //multiply later
            break;}
    salaryNum = salaryNumBox.value;
    outputBox.innerHTML = (salaryNum*salaryType) + "€";
    console.log(salaryNum);
}

20200

20200 >= 12450 = YES -> tax += 12450 * 0.095 
20200 >= 20200 = YES -> tax += (20200-12450) * 0.12
20200 >= 35200 = NO -> 