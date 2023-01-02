const request = require('postman-request');

const foreCast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=00ccda994cd65d4ecda5a1d7964042ce&query=${lat},${long}`;
    request({ url, json: true }, function (error, response, body) {
      if (error) {
        callback('unable to connect to location to services',undefined);
      }
      else if (body.error) {
        callback('unable to find location. Search another term',undefined);
      }
      else {
        callback(undefined,body);
      }
    });
  }
  module.exports=foreCast;