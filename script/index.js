const menuToggle = document.querySelector(".menu-toggle");
const menuDropdown = document.querySelector(".menu-dropdown");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    menuDropdown.classList.toggle("active");
});

const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
      // удалим у кнопки класс btn-up_hide
      this.el.classList.remove('btn-up_hide');
    },
    hide() {
      // добавим к кнопке класс btn-up_hide
      this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
      // при прокрутке содержимого страницы
      window.addEventListener('scroll', () => {
        // определяем величину прокрутки
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
        scrollY > 400 ? this.show() : this.hide();
      });
      // при нажатии на кнопку .btn-up
      document.querySelector('.btn-up').onclick = () => {
        // переместим в начало страницы
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  btnUp.addEventListener();




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



