// Añadimos un event listener al botón HTML.
const button = document.getElementById('button');
button.addEventListener('click', ajaxCheckWeather);
// Obtenemos la información que necesitamos del formulario.
function ajaxCheckWeather() {
  const ubicacion = document.getElementById('location').value;

  // Mostramos la ubicación en el documento HTML
  muestraUbicacion(ubicacion);

  /* LLAMADA AJAX */
  // Usamos la API provista en https://openweathermap.org/current#name
  // Config llamada AJAX
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ubicacion}&lang=es&appid=2123b15abf5dbccb4b78d19ccea8dd7d`;

  // Hacemos llamada AJAX, gestionamos respuesta con responseManager(resp)
  // Gestionamos los errores con una alerta
  fetch(url, requestOptions)
    .then((response) => {
      if (!response.ok) throw new Error('No se pudo obtener la información meteorológica');
      return response.json();
    })
    .then((result) => responseManager(result))
    .catch((error) => alert(`Error: ${error.message}`));
}

/* Función principal que gestiona la respuesta a la llamada AJAX */
function responseManager(resp) {
  console.log(resp);
  cambiaIcono(resp.weather[0].icon);
  muestraDesc(resp.weather[0].description);
  muestraTemp(resp.main.temp);
  muestraHumedad(resp.main.humidity);
  muestraLatitud(resp.coord.lat);
  muestraLongitud(resp.coord.lon);
}

/* Funciones auxiliares para cambiar el HTML/CSS */

function cambiaIcono(nombreIco) {
  // Añade o cambia el icono que tiene el id "icono"
  const icono = document.getElementById('icono');
  icono.src = `https://openweathermap.org/img/wn/${nombreIco}@2x.png`;
}

function muestraDesc(desc) {
  // Muestra la descripción de la previsión en la página HTML
  const prev = document.getElementById('prevision');
  prev.innerHTML = desc;
}

function muestraUbicacion(ubicacion) {
  // Muestra la ubicación en la página HTML
  const elemento = document.getElementById('ubicacionPedida');
  elemento.innerHTML = ubicacion;
}

function muestraTemp(temp) {
  // Convierte la temperatura de Kelvin a Celsius y la muestra en la página HTML
  const tempCelsius = (temp - 273.15).toFixed(1);
  const tempElement = document.getElementById('temp');
  tempElement.innerHTML = tempCelsius;
}

function muestraHumedad(hum) {
  // Muestra la humedad relativa en la página HTML
  const elemento = document.getElementById('humedad');
  elemento.innerHTML = hum;
}

function muestraLatitud(lat) {
  // Muestra la latitud en la página HTML
  const elemento = document.getElementById('latitud');
  elemento.innerHTML = lat;

}

function muestraLongitud(lon) {
  // Muestra la longitud en la página HTML
  const elemento = document.getElementById('longitud');
  elemento.innerHTML = lon;
}