// °F = °C × 1,8 + 32
let fahrenheit = (celsius) => celsius * 1.8 + 32;

// C = (°F − 32) / 1,8
let celsius = (fahrenheit) => (fahrenheit - 32) / 1.8;

module.exports = {
    fahrenheit,
    celsius
}
