import './style.css';
import { userInput, getWeatherInfo } from './modules/weather.js';

const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', () => {
  getWeatherInfo(userInput.value);
  userInput.value = '';
});

userInput.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    submitBtn.click();
  }
});