export const userInput = document.querySelector('.user-input');
const weatherInfo = document.querySelector('.weather-info');

const apiKey = 'a84a2759df96484db9f140443220402';

export const getWeatherInfo = async (location) => {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`);
  const responseInfo = await response.json();

  const city = responseInfo.location.name;
  const { country } = responseInfo.location;
  const temperature = responseInfo.current.temp_c;
  const { humidity } = responseInfo.current;
  const description = responseInfo.current.condition.text;

  const weatherHTML = `
    <div class="temperature">
      <span class="temp-figure">${temperature}</span>
      <span class="temp-symbol">o</span>
      <span class="temp-C">C</span>
    </div>
    <p class="description">${description}</p>
    <div class="location">
      <p class="city-and-country">${city}, ${country}</p>
    </div>
    <p class="humidity">Humidity: ${humidity}%</p>
    `;
  weatherInfo.innerHTML = weatherHTML;
};
