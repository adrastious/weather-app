const request = require('request')

const geocode = (address, callback) => {
  let mapApiUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address + '.json?access_token=pk.eyJ1IjoidGhlYm9pdGhlbGVnZW5kIiwiYSI6ImNrdWJtYzdyczBzNnQyeW8ydG03ejU2YWQifQ.y-v3mJGnwq2Tu-FTcMBUoQ'
  request({ url: mapApiUrl, json: true }, (error, {body}) => {
    if (error) {
      console.log('Unable to connect to location services', undefined)
    } else if (body.features.length === 0) {
      console.log('Unable to find location. Try again with another', undefined)
    }

    callback(undefined, {
      latitude: body.features[0].center[0],
      longitude: body.features[0].center[1],
      location: body.features[0].place_name
    })
  })
}

module.exports = geocode