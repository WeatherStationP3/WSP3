
			var WeatherAppID = "5e10d8c9cc46f7e0c11bff71913a98ec";
			
			var lon;
			var lat;
			var weatherState; 
			
		
			
			
			
			function sendRequest(weatherURL){
			var xmlhttp = new XMLHttpRequest();
			xmlhttp.onreadystatechange = function(){
				if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
					var data = JSON.parse(xmlhttp.responseText);
					var weather = {};
			
			
			
					weather.weatherState = data.weather[0].main; /// Use for changing HTML
					weather.info = data.weather[0].id;
					weather.place = data.name;
					
					
					
					if (weather.info>=200 && weather.info<=232){
						weather.state = "Thunderstorm";
						weather.url = "thunderstorm";
					} else if (weather.info>=300 && weather.info<=311){
						weather.state = "Rain";
						weather.url = "lightrain";
					}else if (weather.info>=312 && weather.info<=321){
						weather.state = "Rain";
						weather.url = "moderaterain";
						
					}else if (weather.info>=500 && weather.info<=516){
						weather.state = "Rain";
						weather.url = "heavyrain";
						
					}else if (weather.info>=517 && weather.info<=532){
						weather.state = "Shower";
						weather.url = "shower";
					}else if (weather.info>=600 && weather.info<=607){
						weather.state = "Snow";
						weather.url = "snow";
					}else if (weather.info>=608 && weather.info<=613){
						weather.state = "Snow";
						weather.url = "snowtop";
						
					}else if (weather.info>=614 && weather.info<=620){
						weather.state = "Snow";
						weather.url = "winter";
						
					}else if (weather.info>=700 && weather.info<=751){
						weather.state = "Fog";
						weather.url = "fog";
						
					}else if (weather.info>=752 && weather.info<=782){
						weather.state = "Special";
						weather.url = "world";
						
					}else if (weather.info==800){
						weather.state = "Clear";
						weather.url = "clearsky";
						
					}else if (weather.info==801){
						weather.state = "Broken Clouds";
						weather.url = "brokenclouds";
						
					}else if (weather.info==802){
						weather.state = "Light Clouds";
						weather.url = "lightclouds";
						
					}else if (weather.info==803){
						weather.state = "Scattered Clouds";
						weather.url = "scatclouds";
						
					}else if (weather.info==804){
						weather.state = "Cloudy";
						weather.url = "cloudy";
						
					}else if (weather.info>=900 && weather.info<=906){
						weather.state = "Extreme";
						weather.url = "world";
						
					}else if (weather.info>=951 && weather.info<=962){
						weather.state = "Special";
						weather.url = "special";
						
					}else {
						weather.state = "Special";
						weather.url = "special";
					}
						
						
					
					
					
					update(weather);
					
					}
				};
				xmlhttp.open("GET", weatherURL, true);
				xmlhttp.send();
				
			
			}
			
			function update(weather){
			var alertString = weather.place + ", "+ weather.state;
			alert(alertString);
			var url = "https://weatherstation.5apps.com/"+weather.url+".html";
			//window.location.assign(url);
			//document.getElementById("change").innerHTML='<object type="text/html" data="'+weather.url+'.html" ></object>';
            var newUrl = '<div style ="position:absolute;top:0;left:0;right:0;bottom:0"><object type="text/html" width="100%" height="100%" data="'+weather.url+'.html"></object></div>'
		
   
			
			document.open();
			document.write(newUrl);
			document.close();
 
			
			
			
			}
			
			window.onload= function(){
			
			getLocation();
			
			}
			
			function getLocation() {
				if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(showPosition);
				
			
				} else { 
			alert('No Location');
    }
}

			function showPosition(position) {
				
				getWeatherData(position.coords.longitude, position.coords.latitude);
				
}
			
			
			function getWeatherData(lon, lat){
				
			var weatherURL = "https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?" + "lat=" + lat + "&lon=" + lon + "&appid="+WeatherAppID;
			sendRequest(weatherURL);
			
			
			}
			
