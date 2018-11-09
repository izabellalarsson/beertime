'use strict'

const noButton = document.querySelector('.no-button');
const canvas = document.querySelector('body')

canvas.addEventListener('mousemove', (e) => {
  let mouseY = e.clientY;
  let mouseX = e.clientX;
  let mouseCords = mouseX + mouseY;
})





// let test = false;
noButton.addEventListener('mouseover', (e) => {
  let randomY = Math.floor(Math.random(window.innerHeight) * 100);
  let randomX = Math.floor(Math.random(window.innerWidth) * 100);


  // console.log(random);
  // let buttonY = e.clientY;
  // let buttonX = e.clientX;
  // let buttonCords = buttonX + buttonY;
  console.log(e.target.style.transform = 'translateX(' + randomX+'px)' + 'translateY(' + randomY+'px)');
  // console.log(e.target.style.transform = );

  // e.target.style.transform = `'transform: translateY(${randomY}px) '`
  // e.target.style.transform = `${test ? 'translateX(-150px)' : 'translateX(150px)'}` + `${test ? 'translateY(-150px)' : 'translateY(150px)'}`;

  // test = !test;
})
