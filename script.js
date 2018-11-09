'use strict'

const noButton = document.querySelector('.no-button');

noButton.addEventListener('mouseover', (e) => {
e.target.style.transform = 'translateX(150px)';
e.target.style.width= '10px';
e.target.style.transform = 'translateX(200px)';
e.target.style.width= '10px';
})
