// This script below is meant as a placeholder,
// Delet it and use your own script here.

import _ from 'lodash';
import './style.css';
import Logo from './assets/webpack-logo.png';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  const webpackLogo = new Image();
  webpackLogo.src = Logo;

  element.appendChild(webpackLogo);

  return element;
}

document.body.appendChild(component());