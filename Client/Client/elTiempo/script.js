document.addEventListener('DOMContentLoaded', function() {
    const locationInput = document.getElementById('location');
    const button = document.getElementById('button');
    const latitudInput = document.getElementById('latitudInput');
    const longitudInput = document.getElementById('longitudInput');
    const buttonCoordenadas = document.getElementById('buttonCoordenadas');
    const ubicacionPedida = document.getElementById('ubicacionPedida');
    const previsionTiempo = document.getElementById('previsionTiempo');
    const icono = document.getElementById('icono');
    const temp = document.getElementById('temp');
    const humedad = document.getElementById('humedad');
    const viento = document.getElementById('viento');
    const direccionViento = document.getElementById('direccionViento');
    const presion = document.getElementById('presion');

    const apiKey = '2196f2a3140v0b0d6c125e8169257760b5';

    button.addEventListener('click', function() {
        const location = locationInput.value;
        if (location) {
            fetchWeather(location);
        } else {
            alert('Please enter a location.');
        }
    });

    buttonCoordenadas.addEventListener('click', function() {
        const latitude = latitudInput.value;
        const longitude = longitudInput.value;
        if (latitude && longitude) {
            fetchWeatherByCoords(latitude, longitude);
        } else {
            alert('Please enter latitude and longitude.');
        }
    });

    function fetchWeather(location) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric&lang=es`;

        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error('No se pudo obtener la información meteorológica');
                return response.json();
            })
            .then(data => updateWeather(data))
            .catch(error => {
                console.error('Error fetching weather data:', error);
                alert('Error fetching weather data.');
            });
    }

    function fetchWeatherByCoords(latitude, longitude) {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=es`;

        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error('No se pudo obtener la información meteorológica');
                return response.json();
            })
            .then(data => updateWeather(data))
            .catch(error => {
                console.error('Error fetching weather data:', error);
                alert('Error fetching weather data.');
            });
    }

    function updateWeather(data) {
        if (data.cod === 200) {
            ubicacionPedida.textContent = data.name;
            previsionTiempo.textContent = data.weather[0].description;
            icono.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            temp.textContent = data.main.temp.toFixed(1);
            humedad.textContent = data.main.humidity;
            viento.textContent = data.wind.speed;
            direccionViento.textContent = data.wind.deg;
            presion.textContent = data.main.pressure;
        } else {
            console.error('Location not found:', data);
            alert('Location not found.');
        }
    }
});