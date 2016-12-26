$(document).ready(function() {
  console.log('statement 1');
  // Going to register the click event
  $('#current').on('click', function() {
      console.log('statement 2');
      // Get the city name from the input box
      var cityName = $('#input1').val();
      // Frame the URL dynamically based on the city name
      var urlStr = 'http://api.openweathermap.org/data/2.5/weather?q='+
      cityName+'&appid=27d43832d2a4adcb97fcbfa23db130aa';
      console.log('statement 3');
      // Fire AJAX request
      $.ajax({
        url: urlStr,
        success: function(data) {
          // This function would be triggered as soon as you get a
          // successful response from the server
          console.log('statement 4');
          console.log(data);
          // Using moment.js to format the date
          var date = moment(Date(data.dt*1000)).format('MMM Do YY');
          var temperature = data.main.temp - 273;
          var humidity = data.main.humidity;
          var desc = data.weather[0].description;
          console.log(date, temperature, humidity, desc);
          var htmlString = '<tr><td>'+date+'</td><td>'+temperature
          +'</td><td>'+humidity+'</td><td>'+desc+'</td></tr>';
          $('tbody').append(htmlString);
        },
        error: function(data) {
          // This function is triggered when you get error response
          // from the server
          console.log('Err',data);
        }
      });
    console.log('statement 5');
  });
  console.log('statement 6');
});
console.log('statement 7');
