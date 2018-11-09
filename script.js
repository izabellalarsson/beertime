'use strict'

const noButton = document.querySelector('.no-button');
const canvas = document.querySelector('body')

canvas.addEventListener('mousemove', (e) => {
  let mouseY = e.clientY;
  let mouseX = e.clientX;
  let mouseCords = mouseX + mouseY;
})






let test = false;
noButton.addEventListener('mouseover', (e) => {

  // let buttonY = e.clientY;
  // let buttonX = e.clientX;
  // let buttonCords = buttonX + buttonY;
  e.target.style.transform = `${test ? 'translateX(-150px)' : 'translateX(150px)'}`;

  test = !test;
e.target.style.width= '10px';
})

if (canvas === noButton) {
}
