const request = require('request');

const config = require('../../config');
const CAndF = require('./celsiusFahrenheit');

let getWeather = (lat, lang, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${config.tokens.forecastToken}/${lat},${lang}`,
        json: true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: CAndF.celsius(body.currently.temperature),
                apparentTemperature: CAndF.celsius(body.currently.apparentTemperature)
            });
        } else {
            callback('Unable to fetch weather.');
        }
    });
}

module.exports.getWeather = getWeather;
