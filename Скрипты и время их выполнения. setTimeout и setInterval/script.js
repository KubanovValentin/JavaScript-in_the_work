// const timerId = setTimeout(function () {
//     console.log('hello');

// }, 4000);
// есть и такой синтаксис 
// const timerId = setTimeout(function (text) {
//     console.log(text);

// }, 4000, 'hello');

// так же мы можем передавать готовую функцию

// const timerId = setTimeout(logger, 2000);

// создадим функцию логерр
// function logger () {
//     console.log('text');
// }
// ________________
// const timerId = setTimeout(logger, 2000); 
//  функция setTimeout работает и без const timerId  но ввиду того что на страничке может быть 
//  несколько таких ассинхронных функций то именно надо понимать какую включить или выключить потому что мы пометили 
// его индивидуальным индификатором const timerId
// --------------------------------------
// для выключения функции после определенных действий есть такая команда как  clearInterval
// вот тогда мы и обратимся к нужной функции через const timerId и выглядит это так 

// clearInterval(timerId);

// ____________________________________________________________________

// посмотрим на более сложном примере 


// const btn = document.querySelector('.btn');
// дальше на эту кнопку мы нажимаем 
// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);
//     const timerId = setInterval(logger, 2000);
// });
// для того чтобы наша функция повторялась через какой то интервал то есть функция  setInterval
// clearInterval(timerId);
// function logger () {
//     console.log('text');
// }
// это скрипт будет запускаться постоянно после клика и для того что бы прекратить действие console.log('text'); 
// нам потребуеться clearInterval(timerId) и напишем тогда нужный нам скрипт
// _______________________________________________________________________________

// const btn = document.querySelector('.btn');

// let timerId,
// i = 0;
// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 2000);
// });
// надо не забывать о том что выполнение внутри локалной функции действии глобальные не видят действия
// поэтому вынесим let timerId
// clearInterval(timerId);
// но clearInterval(timerId); не сработает и поэтому реализуем следующим образом.
// создадим итератор i  он будет счетчиком

// смысл таков -каждый раз i будет увеличиваться на 1 и когда он достигнет 3 сработает очищение 
// function logger () {
//     if (i == 3) {
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }


// ---------------------------------------------
// let id = setTimeout(function log(){
//     console.log('hello');
//     id = setTimeout(log,  3500);
// }, 600);



// ---------------------------------------------------------------------------
const btn = document.querySelector('.btn');
let timerId,
    i = 0;


function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;


    const id = setInterval(frame, 10);
    function frame() {
        if ( pos == 300) {
            // для того чтобы понять когда анимация остановиться прописываем условие со значением для pos
            clearInterval(id);
        } else {
            // для того что бы двигался нужный элемент применим стили css
            pos ++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
        // теперь самое главное надо запускать эту функцию с интервалом setInterval
    }
    
}   
// теперь осталось назанчить триггер (действие клика) 

btn.addEventListener('click', myAnimation );

