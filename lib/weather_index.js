const getWeather = (location) => {
  fetch(`https://pacific-inlet-72046.herokuapp.com/api/v1/forecast?location=${location}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(JSON.stringify(myJson));
    })
  }
}

const getBackground = (location) => {
  fetch(`https://pacific-inlet-72046.herokuapp.com/api/v1/background?location=${location}`)
    .then(function(response) {
      return response.json();
    })
  }
}

$(".search-form").click()

