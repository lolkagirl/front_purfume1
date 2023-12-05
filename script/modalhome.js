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

const oo1 = document.getElementById("oo1");
const oo3 = document.getElementById("oo3");
const oo5 = document.getElementById("oo5");

oo1.onclick = () => {
    if (oo5.style = "#404B34") {
        oo1.style.color = "#404B34";
        oo5.style.color = "#darkgray";
    }
    if (oo3.style = "#404B34") {
        oo1.style.color = "#404B34";
        oo3.style.color = "#darkgray";
    }
    
}
oo3.onclick = () => {
    if (oo5.style = "#404B34") {
        oo3.style.color = "#404B34";
        oo5.style.color = "#darkgray";
    }
    if (oo1.style = "#404B34") {
        oo3.style.color = "#404B34";
        oo1.style.color = "#darkgray";
    }
}
oo5.onclick = () => {
    if (oo3.style = "#404B34") {
        oo5.style.color = "#404B34";
        oo3.style.color = "#darkgray";
    }
    if (oo1.style = "#404B34") {
        oo5.style.color = "#404B34";
        oo1.style.color = "#darkgray";
    }
}


const o10 = document.getElementById("o10");
const o30 = document.getElementById("o30");
const o50 = document.getElementById("o50");

o10.onclick = () => {
    if (o50.style = "#404B34") {
        o10.style.color = "#404B34";
        o50.style.color = "#darkgray";
    }
    if (o30.style = "#404B34") {
        o10.style.color = "#404B34";
        o30.style.color = "#darkgray";
    }
    
}
o30.onclick = () => {
    if (o50.style = "#404B34") {
        o30.style.color = "#404B34";
        o50.style.color = "#darkgray";
    }
    if (o10.style = "#404B34") {
        o30.style.color = "#404B34";
        o10.style.color = "#darkgray";
    }
}
o50.onclick = () => {
    if (o30.style = "#404B34") {
        o50.style.color = "#404B34";
        o30.style.color = "#darkgray";
    }
    if (o10.style = "#404B34") {
        o50.style.color = "#404B34";
        o10.style.color = "#darkgray";
    }
}