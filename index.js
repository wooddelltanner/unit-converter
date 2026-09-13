/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const numberInput = document.getElementById("number-input")
const convertBtn = document.getElementById("convert-btn")

const meterFeet = document.getElementById("meter-feet")
const literGallon = document.getElementById("liter-gallon")
const kilogramPound = document.getElementById("kilogram-pound")
     
convertBtn.addEventListener("click", function() {
    const num = Math.floor(numberInput.value * 1000) / 1000
    const feet = (num * 3.281).toFixed(3)
    const meter = (num / 3.281).toFixed(3)
    const gallon = (num / 0.264).toFixed(3)
    const liter = (num * 0.264).toFixed(3)
    const pound = (num / 2.204).toFixed(3)
    const kilogram = (num * 2.204).toFixed(3)
    meterFeet.textContent = `${num} meters = ${feet} feet | ${num} feet = ${meter} meters`
    literGallon.textContent = `${num} liters = ${gallon} gallons | ${num} gallons = ${liter} liters`
    kilogramPound.textContent = `${num} kilograms = ${pound} pounds | ${num} pounds = ${kilogram} kilograms`
})

//let feet = num * 3.281
//console.log(`${num} meters = ${feet} feet`)