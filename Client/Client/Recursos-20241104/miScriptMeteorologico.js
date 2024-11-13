const button = document.getElementById('button');
button.addEventListener('click', ajaxCheckWeather);
button.addEventListener('mousedown', () => button.classList.add('active'));
button.addEventListener('mouseup', () => button.classList.remove('active'));

async function ajaxCheckWeather() {
  const location = document.getElementById('location').value;
  muestraUbicacion(location);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=es&appid=2123b15abf5dbccb4b78d19ccea8dd7d`;
  document.getElementById('error').textContent = '';

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('No se pudo obtener la información meteorológica');

    const data = await response.json();
    updateWeatherInfo(data);
  } catch (error) {
    document.getElementById('error').textContent = error.message;
    document.getElementById('weatherResult').classList.add('hidden');
  }
}

function updateWeatherInfo(data) {
  document.getElementById('prevision').textContent = data.weather[0].description;
  document.getElementById('icono').src = `img/${data.weather[0].icon}@2x.png`;
  document.getElementById('temp').textContent = (data.main.temp - 273.15).toFixed(1);
  document.getElementById('humedad').textContent = data.main.humidity;

  document.getElementById('weatherResult').classList.remove('hidden');
}

/* Auxiliary Functions */

function muestraUbicacion(location) {
  document.getElementById('ubicacionPedida').textContent = location;
}
