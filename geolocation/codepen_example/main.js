var button = document.getElementById('button');
var statusBox = document.getElementById('status-box');
var dataBox = document.getElementById('data-box');

button.addEventListener('click', getMyPosition);

function getMyPosition() {
  statusBox.innerHTML = 'Finding geolocation data...';
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

function onSuccess(geolocationData) {
  statusBox.innerHTML = 'Success!';
  
  // GeolocationData can't be serialized to JSON,
  // so copy out all the properties manually
  let preview = {
    coords: {
      accuracy: geolocationData.coords.accuracy,
      altitude: geolocationData.coords.altitude,
      altitudeAccuracy: geolocationData.coords.altitudeAccuracy,
      heading: geolocationData.coords.heading,
      latitude: geolocationData.coords.latitude,
      longitude: geolocationData.coords.longitude,
      speed: geolocationData.coords.speed,
    },
    timestamp: geolocationData.timestamp
  };
  
  dataBox.innerHTML = JSON.stringify(preview, null, 2);
}

function onError(error) {
  statusBox.innerHTML = 'Error';
  dataBox.innerHTML = error.message;
}

/* my location converted to JSON:
{
  "coords": {
    "accuracy": 20,
    "altitude": null,
    "altitudeAccuracy": null,
    "heading": null,
    "latitude": 27.7496042,
    "longitude": -97.390215,
    "speed": null
  },
  "timestamp": 1634930747803
}*/