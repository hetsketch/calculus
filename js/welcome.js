'use strict';

const welcome = document.getElementById('welcome'),
      wrapper = document.getElementById('calc-wrapper'),
      tryIt   = document.getElementById('try-it');

//slide welcome page on click
tryIt.addEventListener('click', () => {
  welcome.style = "transform: translate(-100%, 0);";

  setInterval(() => {
    welcome.classList.add('hide');
    wrapper.classList.add('visible');
  }, 1000);
});