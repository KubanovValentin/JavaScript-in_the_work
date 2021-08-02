'use strict';
// методы получения даты 
// const now = new Date ();
// console.log(now);
// так мы можем получать нужную нам дату через эти методы
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDay());
// console.log(now.getDate());

// эти методы возращают значение с местным часовым поясом 

// но иногда нам нужно с разными временами 
// console.log(now.getHours());

// console.log(now.getUTCHours());

// еще есть методы для получения даты 

// ---------------------------------
// console.log(now.getTimezoneOffset());  //разница между UTC 0 временем и местным 


// console.log(now.getTime()); достаем мили сикунды и вставляем в 
// const now = new Date (1627898787628);
// console.log(now);


// -------------------------------------------
// методы сеторы выше мы доставали и получали дату а сейчас мы ее устанавливаем 
// get меняем на set 
const now = new Date ();
console.log(now.setHours(18));
console.log(now);

// --------------------------------------------------

let start = new Date();
for (let i = 0;i < 10000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`цикл отработал за ${end - start} миллисикунд`);