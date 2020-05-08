"use strict";
let price;
let text;
let country = prompt('Введите страну').toLowerCase();

switch (country) {
    case 'китай' :
        country = 'Kитай';
        price = 150;
        text = ' Доставка в ' +country+  ' будет стоить '+price+ ' кредитов.';
        console.log(text);
        break;

    case 'чили':
        country = 'Чили';
        price = 250;
        text = ' Доставка в ' +country+  ' будет стоить '+price+ ' кредитов.';
        console.log(text);
        break;

    case 'австралия':
        country = 'Австралию';
        price = 170;
        text = ' Доставка в ' +country+  ' будет стоить '+price+ ' кредитов.';
        console.log(text);
        break;

    case 'индия':
        country = 'Индию';
        price = 80;
        text = ' Доставка в ' +country+  ' будет стоить '+price+ ' кредитов.';
        console.log(text);
        break;

    case 'Ямайка':
        country = 'Ямайку';
        price = 120;
        text = ' Доставка в ' +country+  ' будет стоить '+price+ ' кредитов.';
        console.log(text);
        break;

    default:
        alert('В вашей стране доставка не доступна')
}