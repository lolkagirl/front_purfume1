const openModalBtn = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});


const openModalBtn1 = document.getElementById('open1');
const modal1 = document.getElementById('modal1');
const closeBtn1 = document.querySelector('.close1');

openModalBtn1.addEventListener('click', () => {
  modal1.style.display = 'flex';
});

closeBtn1.addEventListener('click', () => {
  modal1.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal1) {
    modal1.style.display = 'none';
  }
});

const openModalBtn2 = document.getElementById('open2');
const modal2 = document.getElementById('modal2');
const closeBtn2 = document.querySelector('.close2');

openModalBtn2.addEventListener('click', () => {
  modal2.style.display = 'flex';
});

closeBtn2.addEventListener('click', () => {
  modal2.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal2) {
    modal2.style.display = 'none';
  }
});