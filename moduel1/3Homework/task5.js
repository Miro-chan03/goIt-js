"use strict";
let password = prompt('Введите пароль') ;
let message;
const ADMIN_PASSWORD = 'jqueryismyjam';

if (password == null || password == '') {
    message = 'Отменено пользователем!'; 
} else if (password == ADMIN_PASSWORD) {
message = 'Добро пожаловать!';
 } else {
    message = 'Доступ запрещен, неверный пароль!';   
}

alert(message);