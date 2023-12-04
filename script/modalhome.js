const openModalBtn15 = document.getElementById('modal14');
const modal15 = document.querySelector('.modal15');
const closeBtn15 = document.querySelector('.close15');

openModalBtn15.addEventListener('click', () => {
  modal15.style.display = 'block';
});

closeBtn15.addEventListener('click', () => {
  modal15.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal15) {
    modal15.style.display = 'none';
  }
});

const openModalBtn16 = document.getElementById('modal15');
const modal16 = document.querySelector('.modal16');
const closeBtn16 = document.querySelector('.close16');

openModalBtn16.addEventListener('click', () => {
  modal16.style.display = 'block';
});

closeBtn16.addEventListener('click', () => {
  modal16.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal16) {
    modal16.style.display = 'none';
  }
});