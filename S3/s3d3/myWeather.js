const city = "Paris";
const apiKey = "28e5752dee7e4f10a21d76484393d561";
const apiUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${apiKey}&lang=fr&days=5`;

async function fetchApi(url) {
  const response = await fetch(url)
    .then((response) => response.json())
    .then((response) => {
      responseData = response.data;
      console.log(responseData);
      return responseData;
    })

    .then((responseData) => showWeather(responseData))
    .catch((error) => console.error("Error", error));
}

async function showWeather(data) {
  const days =["lundi", "mardi", "mercredi","jeudi","vendredi","samedi","dimanche"]
  
  data.map((day) => {
    var dailyDate = new Date(day.datetime)
    var dayD = dailyDate.getDay()
    
    showWeatherDetails(days[dayD],day.weather.description,day.weather.icon,day.temp)
    console.log(days[dayD])
    console.log(day)
    console.log(day.weather.description);
    console.log(day.weather.icon);
  });
  console.log(data[0].weather);
}

 async function showWeatherDetails (day, weatherDescription, weatherIcon,temperature){
 var selector = document.getElementById('day')
  const iconUrl = `https://www.weatherbit.io/static/img/icons/${weatherIcon}.png`
  
selector.innerHTML += `
<div class="col">
  <div class="card col-sm" style="width: 18rem;">
    <img class="card-img-top" src="${iconUrl}" alt="Card image cap">
    <div class="card-body">
     <p>${day} </p>
     <p>${temperature} °c</p>
     <p>${weatherDescription}</p>
    </div>
  </div>
</div>
`
}
fetchApi(apiUrl);
