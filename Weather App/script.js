const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c3dd7eb846msh155b3a5da486151p1ba282jsn58faf877cdc0',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather=(city)=>{
    cityName.innerHTML=city.charAt(0).toUpperCase() + city.slice(1);
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => 
        {
            cloud_pct.innerHTML =response.cloud_pct
            temp.innerHTML=response.temp
            feels_like.innerHTML=response.feels_like+"<span>&#8451;</span>"
            humidity.innerHTML=response.humidity
            min_temp.innerHTML=response.min_temp
            max_temp.innerHTML=response.max_temp
            wind_speed.innerHTML=response.wind_speed
            wind_degrees.innerHTML=response.wind_degrees+"<span>&#xb0;</span>"
            sunrise.innerHTML=msToTime(1000*response.sunrise)
            console.log(response)})
	.catch(err => console.error(err));
}
Submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Delhi")



const newYork=()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=new york', options)
	.then(response => response.json())
	.then((response) => 
        {
            cloud_pct1.innerHTML =response.cloud_pct
            temp1.innerHTML=response.temp+"<span>&#8451;</span>"
            feels_like1.innerHTML=response.feels_like+"<span>&#8451;</span>"
            humidity1.innerHTML=response.humidity+" %"
            min_temp1.innerHTML=response.min_temp+"<span>&#8451;</span>"
            max_temp1.innerHTML=response.max_temp+"<span>&#8451;</span>"
            wind_speed1.innerHTML=response.wind_speed+" km/hr"
            wind_degrees1.innerHTML=response.wind_degrees+"<span>&#xb0;</span>"
            sunrise1.innerHTML=msToTime(1000*response.sunrise)
            sunset1.innerHTML= msToTime(1000*response.sunset)
        })
	.catch(err => console.error(err));
}
newYork();
const Boston=()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=boston', options)
	.then(response => response.json())
	.then((response) => 
        {
            cloud_pct2.innerHTML =response.cloud_pct
            temp2.innerHTML=response.temp+"<span>&#8451;</span>"
            feels_like2.innerHTML=response.feels_like+"<span>&#8451;</span>"
            humidity2.innerHTML=response.humidity+" %"
            min_temp2.innerHTML=response.min_temp+"<span>&#8451;</span>"
            max_temp2.innerHTML=response.max_temp+"<span>&#8451;</span>"
            wind_speed2.innerHTML=response.wind_speed+" km/hr"
            wind_degrees2.innerHTML=response.wind_degrees+"<span>&#xb0;</span>"
            sunrise2.innerHTML=msToTime(1000*response.sunrise)
            sunset2.innerHTML= msToTime(1000*response.sunset)
        })
	.catch(err => console.error(err));
}
Boston();
const lucknow=()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lucknow', options)
	.then(response => response.json())
	.then((response) => 
        {
            cloud_pct3.innerHTML =response.cloud_pct
            temp3.innerHTML=response.temp+"<span>&#8451;</span>"
            feels_like3.innerHTML=response.feels_like+"<span>&#8451;</span>"
            humidity3.innerHTML=response.humidity+" %"
            min_temp3.innerHTML=response.min_temp+"<span>&#8451;</span>"
            max_temp3.innerHTML=response.max_temp+"<span>&#8451;</span>"
            wind_speed3.innerHTML=response.wind_speed+" km/hr"
            wind_degrees3.innerHTML=response.wind_degrees+"<span>&#xb0;</span>"
            sunrise3.innerHTML=msToTime(1000*response.sunrise)
            sunset3.innerHTML=msToTime(1000*response.sunset)
        })
	.catch(err => console.error(err));
}
lucknow();
const kolkata=()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata', options)
	.then(response => response.json())
	.then((response) => 
        {
            cloud_pct4.innerHTML =response.cloud_pct
            temp4.innerHTML=response.temp+"<span>&#8451;</span>"
            feels_like4.innerHTML=response.feels_like+"<span>&#8451;</span>"
            humidity4.innerHTML=response.humidity+" %"
            min_temp4.innerHTML=response.min_temp+"<span>&#8451;</span>"
            max_temp4.innerHTML=response.max_temp+"<span>&#8451;</span>"
            wind_speed4.innerHTML=response.wind_speed+" km/hr"
            wind_degrees4.innerHTML=response.wind_degrees+"<span>&#xb0;</span>"
            sunrise4.innerHTML=msToTime(1000*response.sunrise)
            sunset4.innerHTML=msToTime(1000*response.sunset)
        })
	.catch(err => console.error(err));
}
kolkata();
function msToTime(ms) {
    function addZ(n) {
        return (n<10? '0':'') + n;
    }
    var dt = new Date(ms);
    var hrs = dt.getHours();
    var mins = dt.getMinutes();
    var secs = dt.getSeconds();
    var millis = dt.getMilliseconds();
    var tm = addZ(hrs) + ':' + addZ(mins);
    return tm;
}


