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
  console.log(
    "due to dynamic ip, this will give you a network error if the app hasn't been pushed to github the last 6 hours"
  );
  axios
    /* To future employers, this is not good practice. Let's create something more secure together:) */
    .get('http://78.55.134.0:2525/startBlink')
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('an error occured', error);
    });
};
