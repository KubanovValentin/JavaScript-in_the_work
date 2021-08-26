'use strict'
//создаем переменную
// const num = new Number(3);
// console.log(num);
//это устарело


// -----------------------
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}
//наша функция стала конструктором с ее помощью мы можем создавать новых пользователей
// давай те посмотрим как это сделать

User.prototype.exit = function(name) {
    console.log(`Пользователь ${this.name} ушел`);
};



const valentin = new User('Valentin', 42);
const alex = new User('Alex', 20);

valentin.exit();

valentin.hello();
alex.hello();
// console.log(valentin);
// console.log(alex);