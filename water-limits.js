/* water-limits.js */

// Require Module Converter
const { celsiusToFahrenheit,
    fahrenheitToCelsius } = require('./converter');


// Input dari Process Argv
const degreeInput = process.argv[2];

console.log('ini input =>>', degreeInput);


//  Proses dari function di module

const fahrenheitFromCelsius = celsiusToFahrenheit(+degreeInput);

const celsiusFromFahrenheit = fahrenheitToCelsius(fahrenheitFromCelsius);


//  Tampilkan hasilnya

console.log(`Input: ${degreeInput}, hasil pertama: ${fahrenheitFromCelsius}, hasil kedua: ${celsiusFromFahrenheit}`);