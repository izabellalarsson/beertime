'use strict'

const noButton2 = document.querySelector('.no-button');
const canvas = document.querySelector('body')

canvas.addEventListener('mousemove', (e) => {
  let mouseY = e.clientY;
  let mouseX = e.clientX;
  let mouseCords = mouseX + mouseY;
})

noButton2.addEventListener('mouseover', (e) => {
  let randomY = Math.floor(Math.random(window.innerHeight) * 400 - 300);
  let randomX = Math.floor(Math.random(window.innerWidth) * 300 - 200);

  e.target.style.transform = 'translateX(' + randomX+'px)' + 'translateY(' + randomY+'px)';

  e.target.style.transform = `${random ? 'translateX(' + randomX + 'px)' : 'translateX(' + randomX + 'px)'}` + `${random ? 'translateY(' + randomY + 'px)' : 'translateY(' + randomY + 'px)'}`;
})
