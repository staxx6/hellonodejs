const yargs = require('yargs');
const request = require('request');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather');

const argv = yargs.
  options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Adress to fetch weather for',
      string: true
  }
})
.help()
.alias('help', 'h')
.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (errorMessage, results) => {
            if(errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`It's currently ${results.temperature}°C. It feels like ${results.apparentTemperature}°C.`);
            }
        });
    }
});
