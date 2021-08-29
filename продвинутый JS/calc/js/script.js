'use strict';


const inputRub = document.querySelector('#rub'),
        inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();
    // конструктор

    // шаблон ниже
    // request.open(method, url, async, login, pass);
    // method-это обращение к серверу(GET ,POST запрос - получение с сервера какой либо информации )
    //GET мы ничего не отправляем а просто делаем запрос по нашему формату
    // url т.к мы отправляем запрос со странички(из HTML),то правильно надо обратиться к файлу JSON
    request.open('GET', 'js/current.json');
    // мы отправляем запрос и для того чтобы сервер понимал в каком формате и т.д мы прописываем ниже
    request.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    //после этого мы отправляем запрос
    request.send();
    // это методы 

// получили ответ от сервера
// перечислим свойства ответа
    //status - (200,404)Код состояния HTTP https://ru.wikipedia.org/wiki/Список_кодов_состояния_HTTP
    //statusText это текст возле кода(200 - хорошо,404-ошибка)
    //response - это ответ от сервера
    //readyState -это состояние нашего запроса https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/readyState

    request.addEventListener('load', () => {
        if (request.status === 200) {
            // console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'Что-то пошло не так';
        }
    });
});