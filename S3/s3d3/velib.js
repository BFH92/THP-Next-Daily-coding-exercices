var city = "Clichy" //prompt("entrez la ville : ");
city = city.replace(/^\w/, (c) => c.toUpperCase());

async function fetchApi() {
  const response = await fetch(
    `https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=&rows=500&facet=name&refine.nom_arrondissement_communes=${city}`
  )
    .then((response) => response.json())
    .then((response) => {
      const records = response.records;
      return records;
    })
    .then((records) => showStations(records))
    .catch((error) => console.error("OULA", error));
}


async function showStations(records) {
  
  var selector = document.getElementById("1");
  selector.innerHTML = "";
  records.map((record) => {
    showVelibStation(
      selector,
      record.fields.name,
      record.fields.mechanical,
      record.fields.ebike
    );
  });
}

const map = (selector, map) => {
  L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/1/1/0?access_token=pk.eyJ1IjoiYmVub2l0ZmlnZWEiLCJhIjoiY2tyZGZyZjB2NWNsZDJwbzZkMXY1Yjg0aiJ9.H0CtFXx4Tma07cAIB0iH8A', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
    
}).addTo(map);

  L.marker([51.5, -0.09])
    .addTo(map)
    .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
    .openPopup();

  selector.innerHTML += `
      <div>
          ${""}
      </div>
  `;
};


var myMap = L.map("mapid").setView([51.505, -0.09], 13);
var mapSelector = document.getElementById("mapid");


map(mapSelector, myMap);
fetchApi()
setInterval(fetchApi,10000);

const showVelibStation = (
  selector,
  name,
  numberClassicalVelibs,
  numberElectricVelibs
) => {
  
  selector.innerHTML += `
      <div>
          <h2>Station : ${name}</h2>
          <p>${numberClassicalVelibs} classical Velibs</p>
          <p>${numberElectricVelibs} electric Velibs</p>
      </div>
  `;
};

