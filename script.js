'use strict'

const noButton = document.querySelector('.no-button');
const canvas = document.querySelector('body')

canvas.addEventListener('mousemove', (e) => {
  let mouseY = e.clientY;
  let mouseX = e.clientX;
  let mouseCords = mouseX + mouseY;
})


noButton.addEventListener('mouseover', (e) => {
  for(let i = 0; i < e; i++){
     Math.random();
  }
  return (e);
})

// noButton.addEventListener('mouseover', (e) => {
//   let buttonY = e.clientY;
//   let buttonX = e.clientX;
//   let buttonCords = buttonX + buttonY;
// })

// if (canvas === noButton) {
//   noButton.target.style.transform = 'translateX(150px)';
//   noButton.target.style.width= '10px';
// }
