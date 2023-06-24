/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


// DOM
const numEl = document.getElementById("num-el")
const numLength = document.getElementById("num-length")
const numVol = document.getElementById("num-vol")
const numMass = document.getElementById("num-mass")

// Functions

// Function metre to feet

function convMetreToFeet() {
    const metersToFeet = numEl.value * 3.281
    const FeetToMeters = numEl.value / 3.281
    const metersToFeetValue = `${numEl.value} meters = ${metersToFeet.toFixed(2)} feet`
    const feetToMetresValue = `${numEl.value} feet = ${FeetToMeters.toFixed(2)} metres`
    return `${metersToFeetValue} | ${feetToMetresValue}`
}

// Function litre to gallon
function convLitreToGallon() {
    const litreToGallon = numEl.value * 0.264
    const gallonToLitre = numEl.value / 0.264
    const litreToGallonValue = `${numEl.value} litres = ${litreToGallon.toFixed(2)} gallons`
    const gallonToLitreValue = `${numEl.value} gallons = ${litreToGallon.toFixed(2)} litres`
    return `${litreToGallonValue} | ${gallonToLitreValue}` 
}

// Function Kg to Lbs
function convKgToPounds() {
    const KgToPounds = numEl.value * 2.204
    const poundsToKg = numEl.value / 2.204
    const KgToPoundsValue = `${numEl.value} Kg = ${KgToPounds.toFixed(2)} lbs`
    const poundsToKgValue = `${numEl.value} lbs = ${poundsToKg.toFixed(2)} Kg`
    return `${KgToPoundsValue} | ${poundsToKgValue}` 
}

function fullFunc() {
    numLength.textContent = convMetreToFeet()
    numVol.textContent = convLitreToGallon()
    numMass.textContent = convKgToPounds()
}