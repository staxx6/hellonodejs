const request = require('request');
const yargs = require('yargs');

const apiToken = 'AIzaSyCelFIBBOfYZW_44B9OT4yqnVHkv-Ud_tk';

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

let userAddressURI = encodeURIComponent(argv.address);

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${userAddressURI}&key=${apiToken}`,
  json: true
}, (error, response, body) => {
  if(error) {
    console.log('Unable to connect to Google servers.');
  } else if(body.status === 'ZERO_RESULTS') {
    console.log('Unable to find that address.');
  } else if(body.status === 'OK') {
    console.log(`Adress: ${body.results[0].formatted_address}`);
    console.log(`Lat: ${body.results[0].geometry.location.lat}`)
    console.log(`Lng: ${body.results[0].geometry.location.lng}`)
  } else {
    console.log('Sorry something is wrong here');
  }
});
