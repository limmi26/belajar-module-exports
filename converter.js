// Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return celsius * (9 / 5) + 32;
}


// Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}

// Module Exports

module.exports = {
    celsiusToFahrenheit,
    fahrenheitToCelsius
}w2x