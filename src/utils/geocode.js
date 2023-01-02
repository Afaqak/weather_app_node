const request = require('postman-request');

const geoCode = (address, callback) => {
    const mapUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiZnJpdnhkIiwiYSI6ImNsYzV3eWFpZjByMWszcXQ4a2sxYXY3aDUifQ.gqmXsKW4yQF9q-_EUtL7Tg&limit=1`;
    request({ url:mapUrl ,json:true}, function (error, response, body) {
      const {features}=body;
      if(error){
        callback('unable to connect to location to services',undefined)
      } else if(features.length===0){
        callback('unable to find location. Search another term',undefined)
      }
      else{
        const [long,lat,place_name]=features[0].center;
        callback(undefined,{
          latitude:lat,
          longitude:long,
          location:place_name
        })
      }
      
    })
  }

  module.exports=geoCode;
