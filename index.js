const runApi = () => {
  apiCall();
  document.getElementById('wrapper').className = 'animation';
  setTimeout(() => {
    document.getElementById('wrapper').className = '';
  }, 4000);
};

const showInfo = () => {
  console.log(
    'Easter egg triggered! If you can read this then send me an email and tell me how I can improve my small application - tormod.flesjo[a]gmail.com'
  );
  document.getElementById('ha').play();
};

// Make a request for a user with a given ID
const apiCall = () => {
  axios
    /* To future employers, this is not good practice. Let's create something more secure together:) */
    .get('http://89.14.24.193:2525/startBlink')
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('an error occured', error);
    });
};
