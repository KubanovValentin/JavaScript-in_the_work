'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('button');
// const width = box.clientWidth; //только падинги без марджинов
// const height = box.clientHeight;//только падинги без марджинов

// const width = box.offsetWidth; // падинги и марджины
// const height = box.offsetHeight;//падинги и марджины только видимая часть


const width = box.scrollWidth; // падинги и марджины
const height = box.scrollHeight;//падинги и марджины только видимая часть
console.log(width, height);

    btn.addEventListener('click', () => {
        // box.style.height = box.scrollHeight + 'px';
        console.log(box.scrollTop); //показывает при клике сколько мы уже просмотрели пикселей
});

// console.log(box.getBoundingClientRect());// это команда координат обьекта
console.log(box.getBoundingClientRect().top); //это показывает только это свойство
// и таким образом для этого обьекта получим только это значение топ 

const style = window.getComputedStyle(box);
console.log(style.display);
