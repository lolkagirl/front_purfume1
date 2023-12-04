const openModalBtn3 = document.getElementById('Modal1');
const modal3= document.getElementById('modal3');
const closeBtn3 = document.querySelector('.close3');

openModalBtn3.addEventListener('click', () => {
  modal3.style.display = 'flex';
});

closeBtn3.addEventListener('click', () => {
  modal3.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal3) {
    modal3.style.display = 'none';
  }
});


const openModalBtn4 = document.getElementById('Modal2');
const modal4 = document.getElementById('modal4');
const closeBtn4 = document.querySelector('.close4');

openModalBtn4.addEventListener('click', () => {
  modal4.style.display = 'flex';
});

closeBtn4.addEventListener('click', () => {
  modal4.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal4) {
    modal4.style.display = 'none';
  }
});

const openModalBtn5 = document.getElementById('Modal3');
const modal5 = document.getElementById('modal5');
const closeBtn5 = document.querySelector('.close5');

openModalBtn5.addEventListener('click', () => {
  modal5.style.display = 'flex';
});

closeBtn5.addEventListener('click', () => {
  modal5.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal5) {
    modal5.style.display = 'none';
  }
});