'use strict';

let input = document.getElementById('unit');

let meter = document.getElementById('meter');
let liter = document.getElementById('liter');
let kilo = document.getElementById('kilo');

function meterToFeet(num) {
    let res = (num * 3.28084).toFixed(3);
    return res;
}

function feetToMeter(num) {
    let res = (num / 3.28).toFixed(3);
    return res;
}

function literToGallon(num) {
    let res = (num / 3.785).toFixed(3);
    return res;
}

function gallonToLiter(num) {
    let res = (num * 3.785412).toFixed(3);
    return res;
}

function kiloToPound(num) {
    let res = (num * 2.2).toFixed(3);
    return res;
}

function poundToKilo(num) {
    let res = (num * 0.45359237).toFixed(3);
    return res;
}

input.addEventListener('input', (e) => {
    let inputData = e.target.value;

    let feet = meterToFeet(inputData);
    let meters = feetToMeter(inputData);
    meter.textContent = `${inputData} meters = ${feet} feet | ${inputData} feet = ${meters} meters`;

    let gallons = literToGallon(inputData);
    let liters = gallonToLiter(inputData);
    liter.textContent = `${inputData} liters = ${gallons} gallons | ${inputData} gallons = ${liters} liters`;

    let pounds = kiloToPound(inputData);
    let kilos = poundToKilo(inputData);
    kilo.textContent = `${inputData} kilos = ${pounds} pounds | ${inputData} pounds = ${kilos} kilos`;
});