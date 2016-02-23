$(document).ready(function(){
	$('#result').hide();
	$('#forecast').click(function(){
		cityName=$('#input1').val();
		console.log(cityName);
		var urlStr='http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=44db6a862fba0b067b1930da0d769e98';
		$.ajax({
		   url: urlStr,
		   data: {
		      format: 'json'
		   },
		   error: function() {
		      console.log("error occured");
		   },
		   dataType: 'jsonp',
		   success: function(data) {
		   	console.log('got data');
		   	console.log(data);
		   	var date=new Date(data.dt*1000);
		   	var dateStr=date.getDate()+'-'+date.getMonth();
		   	var temparature=Math.round(data.main.temp-273.5,2);
		   	var humidity=data.main.humidity;
		   	var weather=data.weather[0].description;
		   	$('#forecast').after('<h3>Forecast for city '+data.name+'<h3>');
		   	var innerHtml = '<tr><td>'+dateStr+'</td><td>'+temparature+'</td><td>'+humidity+'</td><td>'+weather+'</td></tr>';
		   	$('tbody').append(innerHtml);
		   	$('#result').show();
		      // var $title = $('<h1>').text(data.talks[0].talk_title);
		      // var $description = $('<p>').text(data.talks[0].talk_description);
		      // $('#info')
		      //    .append($title)
		      //    .append($description);
		   },
		   // type: 'GET'
		});
	});
});

$(document).ready(function(){
	$('#action-button').click(function() {
		console.log('button clicked');
   $.ajax({
      url: 'http://api.joind.in/v2.1/talks/10889',
      data: {
         format: 'json'
      },
      error: function() {
         $('#info').html('<p>An error has occurred</p>');
      },
      dataType: 'jsonp',
      success: function(data) {
         var $title = $('<h1>').text(data.talks[0].talk_title);
         var $description = $('<p>').text(data.talks[0].talk_description);
         $('#info')
            .append($title)
            .append($description);
      },
      type: 'GET'
   });
});
});
