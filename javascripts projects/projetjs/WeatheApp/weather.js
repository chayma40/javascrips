async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = "d53c1d7e0f863bae8cbfa4e56ce33d23";  // Remplace par ta clé personnelle
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('temperature').innerText = `${Math.round(data.main.temp)}°C`;
            document.getElementById('cityName').innerText = data.name;
            document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
            document.getElementById('windSpeed').innerText = `Wind Speed: ${data.wind.speed} km/h`;

            // Icône simple en fonction de la météo
            const icon = document.querySelector('.icon');
            if (data.weather[0].main === "Clear") icon.innerText = "☀️";
            else if (data.weather[0].main === "Clouds") icon.innerText = "☁️";
            else if (data.weather[0].main === "Rain") icon.innerText = "🌧️";
            else icon.innerText = "🌡️";
        } else {
            alert("City not found!");
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}
