'use strict';

// отправка
const persone = {
    name: 'Alex',
    tel: '+74444444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};
// глубокое клонирование обьекта
const clone = JSON.parse(JSON.stringify(persone));

clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);
// console.log(JSON.stringify(persone));

// самый обычный обьект
// console.log(JSON.parse(JSON.stringify(persone)));

// преимущества маленький вес файла и простота понимания