// const btns = document.querySelectorAll('button');
// console.log(btns[0].classList.length);//сколько классов
// console.log(btns[0].classList.item(1));//можем получить определенный класс
// console.log(btns[0].classList.add('red'));//добавили клас
// console.log(btns[0].classList.remove('blue')); //удалили класс
// console.log(btns[0].classList.item(2));//можем получить определенный класс
// console.log(btns[0].classList.toggle('red'));//позволяет(если выше удалили клас то добавляет) 
                                             //если (такойже как есть пишем то удаляет
// console.log(btns[0].classList.add('red', 'black'));//можем добавлять класс через запятую 

// console.log(btns[1].classList.add('black'));//сдесь мы добавили 2 кнопке  класс и применили условие чтоб проверить

// if (btns[1].classList.contains('black')) {
//     console.log('black');
// }

// так работает гамбургер, мы добавляем класс актив и открываеться меню 
// затем нажимая закрыть мы проверяем есть ли этот класс



// скрипт следил за тем что пользователь кликнет 
// btns[0].addEventListener('click', () => {
    //  дальше используем условие 
    // я хочу  сказать коду если у второй кнопке нет класса ред то я его добавлю
    // если же он есть то я его уберу
    // у элемента нет такого класса значит зтавим знак отрицания -!
    // помещаем тот класс который проверяем 
    // if (!btns[1].classList.contains('red')) {
        // читаеться так что мы у второй кнопки проверяем  наличия класса ред и что ее просто нет 
        // и если этой кнопке не назначен этот класс то мы  его добавим
        // btns[1].classList.add('red'); 
        // и тут же можем дополнить если у нас этот класс есть то уберем
//     } else {
//         btns[1].classList.remove('red'); 
//     }
// });

// переведем скрипт - когда я кликую на первую кнопку btns[0] то начинаю проверять есть ли  у второй кнопки класс ред
// если у второй кнопки нет класса ред то мы добавляем его btns[1].classList.add('red'); 
// если он там присутствует то мы его удаляем btns[1].classList.remove('red'); 



// так применем toggle

// btns[0].addEventListener('click', () => {
//     btns[1].classList.toggle('red');
// });
// тоже работает ,в сложных скриптах такое поведение не всегда доступно и приходиться прописывать как выше


// -----------------------------------------------------
//  если у нас   много кнопок и нам нужно при клике выбирать одно и тоже событие то мы  должны делигировать событие 

// мы назначаем обработчик события на родителя элементов  а в нутри мы уже будем проверять на что мы
// кликули и назначаем фенкцию для его потомков если они подходять под определенные параметры


const btns = document.querySelectorAll('button');
    wrapper = document.querySelector('.btn-block');


    btns[0].addEventListener('click', () => {
    btns[1].classList.toggle('red');
});


    wrapper.addEventListener('click', (event) => {
    //    console.dir(event.target); //    вот так мы проверяем на что кликаем tagName: "BUTTON" 

    if (event.target && event.target.tagName == "BUTTON" ) {
        console.log('hello');
    }
    // if (event.target && event.target.classList.contains('blue') ) {
    //     console.log('hello');
    // }
    });

    // -----
// без делегирования 
// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('hii');
//     });
// });

// и на последней кнопке btn.classList.add('red'); ничего не происходит 

// ---------
    const btn = document.createElement('button');
    btn.classList.add('red');
    wrapper.append(btn);


// _____________________
// более продвинутое делегирование 
// применяем matches(button.red) именно на схожесть 
// if (event.target && event.target.matches(button.red) ) {
//     console.log('hello');
// }

// _________________________________________________