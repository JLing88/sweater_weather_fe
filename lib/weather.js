const getWeather = (location) => {
  fetch("https://pacific-inlet-72046.herokuapp.com/api/v1/forecast?location=Boulder,CO")
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(JSON.stringify(myJson));
    });
  }