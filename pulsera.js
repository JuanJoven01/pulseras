let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 15,
  });

  const waitexcecute = () => 
  {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Estás aqui");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
    setTimeout(waitexcecute, 5000);
  }
  waitexcecute();
  infoWindow = new google.maps.InfoWindow();
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

window.initMap = initMap;


//Hora actual 
let fechaActual = new Date();
let hora = fechaActual.getHours();
let minutos = fechaActual.getMinutes();
let segundos = fechaActual.getSeconds();

let numberSection = 1
let sectionObject = []
let currentlyHour = hora + ":" + minutos + ":" + segundos;

//crea una secction que contiene datos de cada persona
function newPerson() {
  let num = Math.floor(Math.random() * (160 - 40)) + 40;

  let newRhythm = document.createElement('output');
  newRhythm.type = 'number';
  newRhythm.value = num;

  let newSign = document.createElement('output');
  newSign.type = 'text';
  newSign.value = currentlyHour;

  let newLocation = document.createElement('output');
  newLocation.type = 'text';
  newLocation.value = 'mostrar';

  sectionObject.push({rhythm: newRhythm.value, sign: newSign.value, location: newLocation.value});
  sectionObject.sort((a, b) => a.rhythm - b.rhythm);

  numberSection++;
}

//lanzamiento de la funcion newSection  
function Join() {
  for (let i = 0; i < 5; i++) {
    newPerson();
  }

  newsec = document.querySelector('.category');
  sectionContain = document.createElement('contain');
  sectionContain.className = 'containSec';
  sectionContain.type = 'section';
  newsec.appendChild(sectionContain);

  newsec = document.querySelector('.containSec');
  sectionRhythm = document.createElement('section');
  sectionRhythm.className = 'forRhythm';
  sectionRhythm.type = 'section';
  newsec.appendChild(sectionRhythm);

  newsec = document.querySelector('.containSec');
  sectionSign = document.createElement('section');
  sectionSign.className = 'forSign';
  sectionSign.type = 'section';
  newsec.appendChild(sectionSign);

  newsec = document.querySelector('.containSec');
  sectionLocation = document.createElement('section');
  sectionLocation.className = 'forLocation';
  sectionLocation.type = 'section';
  newsec.appendChild(sectionLocation);

  let forRhythm = document.querySelector('.forRhythm');
  let forSign = document.querySelector('.forSign');
  let forLocation = document.querySelector('.forLocation');
  
  sectionObject.forEach((section) => {
    const rhythm = document.createElement('div');
    rhythm.type = 'div';
    rhythm.id = 'newSec';
    rhythm.className = 'newSec';
    rhythm.textContent = section.rhythm;
    forRhythm.appendChild(rhythm);

    const sign = document.createElement('div');
    sign.type = 'div';
    sign.id = 'newSec';
    sign.className = 'newSec';
    sign.textContent = section.sign;
    forSign.appendChild(sign);

    const location = document.createElement('div');
    location.type = 'div';
    location.id = 'newSec';
    location.className = 'newSec';
    location.textContent = section.location;
    forLocation.appendChild(location);
  })
}

  Join();


