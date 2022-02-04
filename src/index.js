import './style.css';
import { userInput, getWeatherInfo } from './modules/weather.js';

const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', () => {
  getWeatherInfo(userInput.value);
  userInput.value = '';
})