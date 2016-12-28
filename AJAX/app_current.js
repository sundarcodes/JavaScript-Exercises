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

  $('#forecast').on('click', function() {
      // Get the city name from the input box
      var cityName = $('#input1').val();
      // Frame the URL dynamically based on the city name
      var urlStr = 'http://api.openweathermap.org/data/2.5/forecast?q='+
      cityName+'&appid=27d43832d2a4adcb97fcbfa23db130aa';
      // Fire AJAX request
      $.ajax({
        url: urlStr,
        success: function(data) {
          // This function would be triggered as soon as you get a
          // successful response from the server
          console.log(data);
          var dateArr = [];
          var tempArr = [];
          // Imperative style
          // for(i = 0;i < data.list.length; i++) {
          //   dateArr.push(data.list[i].dt_txt);
          //   tempArr.push(data.list[i].main.temp - 273);
          // }

          // Declarative
          // Explicit was of defining a function inside map
          // dateArr = data.list.map(function(item) {
          //   return item.dt_txt;
          // }
          //Implicit way of defining - ES6 style
          dateArr = data.list.map(item => item.dt_txt);
          tempArr = data.list.map(item => item.main.temp - 273);

          Highcharts.chart('chart', {
            chart: {
                type: 'spline'
            },
            title: {
                text: '5 Day Average Temperature'
            },
            subtitle: {
                text: 'Source: openweathermap.org'
            },
            xAxis: {
                categories: dateArr
            },
            yAxis: {
                title: {
                    text: 'Temperature'
                },
                labels: {
                    formatter: function () {
                        return this.value + '°';
                    }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true
            },
            plotOptions: {
                spline: {
                    marker: {
                        radius: 4,
                        lineColor: '#666666',
                        lineWidth: 1
                    }
                }
            },
            series: [{
                name: cityName,
                marker: {
                    symbol: 'square'
                },
                data: tempArr
            }]
    });


        },
        error: function(data) {
          // This function is triggered when you get error response
          // from the server
          console.log('Err',data);
        }
      });
  });
});
