const openModalBtn11 = document.getElementById('modal17');
const modal11 = document.querySelector('.modal17');
const closeBtn11 = document.querySelector('.close17');

openModalBtn11.addEventListener('click', () => {
  modal11.style.display = 'block';
});

closeBtn11.addEventListener('click', () => {
  modal11.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal11) {
    modal11.style.display = 'none';
  }
});
