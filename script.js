async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "186733f9bbd4a24e772bc69b6ec6d89b";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("City not found");
      }
  
      const data = await response.json();
      document.getElementById("cityName").innerText = `City: ${data.name}`;
      document.getElementById("temperature").innerText = `Temperature: ${data.main.temp} °C`;
      document.getElementById("description").innerText = `Condition: ${data.weather[0].description}`;
      document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity} %`;
      document.getElementById("windSpeed").innerText = `Wind Speed: ${data.wind.speed} km/h`;
    } catch (error) {
      alert(error.message);
    }
  }
  