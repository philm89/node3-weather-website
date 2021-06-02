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
          ' ℃ out. The current wind speed is ' +
          body.current.wind_speed +
          ' KPH. It feels like it is ' +
          body.current.feelslike +
          ' ℃ out.'
      );
    }
  });
};

module.exports = forecast;
