$(document).ready(function(){
	console.log('Document is ready');
	$('#result').hide();
	$('#current').click(function(){
		// Clear all old data
		$('tbody>tr').remove();
		var cityName=$('#input1').val();
		// console.log(cityName);
		var urlStr='http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=27d43832d2a4adcb97fcbfa23db130aa';
		console.log('Before calling Ajax');
		$.ajax({
		   url: urlStr,
		   error: function() {
		      console.log("error occured");
		   },
		   success: function(data) {
		   	console.log('got data');
		   	console.log(data);
		   	var date=new Date(data.dt*1000);
		   	var dateStr=date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
		   	var temparature=Math.round((data.main.temp-273.5)*100)/100 + ' &#8451;';
		   	var humidity=data.main.humidity;
		   	var weather=data.weather[0].description;
		   	$('#textInfo').text('Current Weather for city '+cityName+','+data.sys.country);
		   	var innerHtml = '<tr><td>'+dateStr+'</td><td>'+temparature+'</td><td>'+humidity+'</td><td>'+weather+'</td></tr>';
		   	$('tbody').append(innerHtml);
		   	$('#result').show();
		   },
		});
		console.log('After calling Ajax');
	});


	$('#forecast').click(function(){
		// Clear all old data
		$('tbody>tr').remove();
		var cityName=$('#input1').val();
		// console.log(cityName);
		var urlStr='http://api.openweathermap.org/data/2.5/forecast?q='+cityName+'&appid=27d43832d2a4adcb97fcbfa23db130aa';
		$.ajax({
			 url: urlStr,
			 error: function() {
					console.log("error occured");
			 },
			 success: function(data) {
				console.log('got data');
				console.log(data);
				var i = 0;
				var tempArr = [];
				var datesArr = [];
				for (i = 0; i < data.list.length; i++) {
					var obj = data.list[i];
					datesArr.push(moment(obj.dt*1000).format('ddd h:mm a'));
					tempArr.push(Math.round((obj.main.temp-273.5)*100)/100);
				}

				Highcharts.chart('chart', {
        title: {
            text: '5 Day Average Temperature',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: openweathermap.com',
            x: -20
        },
        xAxis: {
            categories: datesArr
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: cityName,
            data: tempArr
        }]
    });
				// var date=new Date(data.dt*1000);
				// var dateStr=date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
				// var temparature=Math.round((data.main.temp-273.5)*100)/100 + ' &#8451;';
				// var humidity=data.main.humidity;
				// var weather=data.weather[0].description;
				// $('#textInfo').text('Current Weather for city '+cityName+','+data.sys.country);
				// var innerHtml = '<tr><td>'+dateStr+'</td><td>'+temparature+'</td><td>'+humidity+'</td><td>'+weather+'</td></tr>';
				// $('tbody').append(innerHtml);
				// $('#result').show();
			 },
		});
		console.log('After calling Ajax');
	});

	console.log('After registering click event');
});

console.log('Hello');
