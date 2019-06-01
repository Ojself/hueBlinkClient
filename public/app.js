require('dotenv').config();
require('es6-promise').polyfill();

/* TODO:
- Leave another color so the user knows an alert was being fired?
- Favicon
- HBS or React?
 */

let oldValue = { state: null };

var hue = require('node-hue-api'),
  HueApi = hue.HueApi,
  lightState = hue.lightState;

var setStatus = status => {
  oldValue.state = status.state;
};

var displayResult = result => {
  console.log(result);
};

var displayError = err => {
  console.error(err);
};

var host = process.env.host,
  username = process.env.username,
  api = new HueApi(host, username),
  blinkState = lightState
    .create()
    .on()
    .rgb(255, 0, 0)
    .longAlert();

/* Gets the initial information of the light */
api.getLightStatusWithRGB(1).then(setStatus);

/* calls the light to do set the values with blinkState */
api
  .setLightState(1, blinkState)
  .then(displayResult)
  .fail(displayError)
  .done();

/* Sets lights back to initial state after alert is done. */
setTimeout(() => {
  if (oldValue.state.on) {
    api
      .setLightState(1, oldValue.state)
      .then(displayResult)
      .fail(displayError)
      .done();
  } else {
    api.setLightState(1, { on: false });
  }
}, 8000);
