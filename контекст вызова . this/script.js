'use strict';
//функция может вызываться 4 способоми и вкаждом вызове констект отличаеться
// 1)
// function showThis() {
//     console.log(this);
// }
// showThis();


// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }
// showThis(4, 5);

// 2)
// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// };
// obj.sum();


// 3)

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log("hello!" + this.name);
//     };
// }   
// let valentin = new User('valentin', 42);

// 4)
// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: "john"
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

//1) обычная функция : this = window, но если use strict - undefined
// 2) контекст у методов обьекта - это сам обьект
// 3) this в конструкторах и классах - это новый экземпляр обьекта
// 4) ручная привязка this: call, apply, bind


// const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     // console.log(this);
//     this.style.backgroundColor = 'red';
// });

// const btn = document.querySelector('button');

// btn.addEventListener('click', (e) => {
//   e.target.style.backgroundColor = 'red';
// });


// const obj = {
//     num: 5,
//     sayName: function() {
//         const say = () => {
//             console.log(this);
//         };
//         say();
//     }
// };

// obj.sayNamber();


// const double = a => a * 2;