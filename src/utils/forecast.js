const request = require('postman-request');

const forecast = (lat, long, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=cb0014c0c693d7ef7341db4b31661833&query=' +
    long +
    ',' +
    lat +
    '&units=m';

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location. Please try again.', undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ' It is currently ' +
          body.current.temperature +
          ' degress out. The current wind speed is ' +
          body.current.wind_speed +
          ' KPH.'
        // temp: body.current.temperature,
        // windChill: body.current.feelslike,
        // windSpeed: body.current.wind_speed,
        // windDir: body.current.wind_dir,
        // description: body.current.weather_descriptions[0],
      );
    }
  });
};

module.exports = forecast;
