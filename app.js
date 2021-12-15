
const salaryTypeBox = document.querySelector("#salaryType");
const payNumBox = document.querySelector("#payNum");
const salaryNumBox = document.querySelector("#salaryNum");
const userCABox = document.querySelector("#userCA");

const salarioNetoBox = document.querySelector("#salarioNetoAnual");
const cuotaIRPFBox = document.querySelector("#cuotaIRPF");
const cuotaSSBox = document.querySelector("#cuotaSS");
const tipoTotalBox = document.querySelector("#tipoTotal");
const salarioNetoMensualBox = document.querySelector("#salarioNetoMensual")
const pagaExtraContainer = document.querySelector("#pagaExtraContainer");
const pagaExtraBox = document.querySelector("#pagaExtra");

const imageBox = document.querySelector("#garcias");

document.querySelector("#footer").innerHTML += new Date().getFullYear() + ' 💖';

class Tramos {
    constructor(description, tramos, tipos) {
        this.description = description;
        this.tramo = tramos;
        this.tipo = tipos;
    }
}

let tipoSS = 4.70 + 1.55 + 0.10;

const tramosIRPF_estado = new Tramos("Estatal", [0, 12450, 20200, 35200, 60000, 300000], [9.5, 12, 15, 18.5, 22.5, 24.5]);

const tramosIRPF_CA = [
    new Tramos("General", [0, 12450, 20200, 35200, 60000, 300000], [9.5, 12, 15, 18.5, 22.5, 24.5]),
    new Tramos("Catalunya", [0, 17007.20, 33007.20, 53407.20, 90000, 120000, 175000], [12, 14, 18.5, 21.5, 23.5, 24.5, 25.5])
]

console.log(tramosIRPF_CA[1]);

function salaryInfoChange() {
    let payNum, salaryType, userCA, cuotaIRPF, cuotaSS, preTaxSalary, afterTaxSalary;
    userCA = userCABox.value;
    console.log(userCA);
    payNum = payNumBox.value;
    console.log(pagaExtraContainer.style.display);
    if (payNum == 12) {pagaExtraContainer.classList.add("hidden")} else {pagaExtraContainer.classList.remove("hidden")}
    switch (salaryTypeBox.value) {
        case "yearly":
            salaryType = 1;
            break;
        case "monthly":
            salaryType = 12; //multiply later
            break;}
    preTaxSalary = salaryNumBox.value * salaryType;
    cuotaIRPF = getCuotaIRPF(preTaxSalary, tramosIRPF_estado);
    cuotaIRPF += getCuotaIRPF(preTaxSalary, tramosIRPF_CA[userCA]);
    afterTaxSalary = preTaxSalary - cuotaIRPF;
    cuotaSS = preTaxSalary * (tipoSS/100);
    afterTaxSalary -= cuotaSS;
    salarioNetoBox.innerHTML = (afterTaxSalary).toFixed(2) + "€";
    cuotaIRPFBox.innerHTML = (cuotaIRPF).toFixed(2) + "€";
    cuotaSSBox.innerHTML = (cuotaSS).toFixed(2) + "€";
    tipoTotalBox.innerHTML = (((cuotaIRPF + cuotaSS) / preTaxSalary) *100).toFixed(2) + "%";
    salarioNetoMensualBox.innerHTML = (afterTaxSalary/payNum).toFixed(2) + "€";
}

/*
20300

20300 >= 12450 = YES -> tax += 12450 * 0.095 //tax = 1182,75
20300 >= 20200 = YES -> tax += (20200 - 12450) * 0.12 = 930 (+ 1182,75) =  2112,75
20300 >= 35200 = NO -> tax += (20300 - 20200) * 0.15 = 15 (+ 2112,75) = 2127,75

tax = 2127,75
*/

function getCuotaIRPF(bruto, tramosIRPF) {
    let tax = 0;
    tramosIRPF.tramo.forEach((tramo, index, tramos) => {
        tax += (bruto>=tramo) * ((bruto>tramos[index+1] ? tramos[index+1]-tramo : bruto-tramo) * (tramosIRPF_estado.tipo[index]/100));
        console.log(tax);
    });
    return tax;
}
/**
 * 30000
 * 
 * 30000 >= 0 = YES -> tax += (12450 - 0) * 0.095
 *  
*/
/* let bruto = 30000, neto = 0, tax = 0;
tramosIRPF_estado.tramo.forEach((tramo, index, tramos) => {
        tax += (bruto>=tramo) * ((bruto>tramos[index+1] ? tramos[index+1]-tramo : bruto-tramo) * (tramosIRPF_estado.tipo[index]/100));
});
neto = bruto - tax;
console.log(tax, neto); */
//tax = 3582.75
//neto = 26417.25