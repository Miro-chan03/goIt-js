"use strict";
let credits = 23580;
let pricePerDroid = 3000;
let totalPrice;
let result;
let count = prompt("Введите количество товаров");
if(count === null) { 
    result = "Отменено пользователем!";
} else if(isNaN(count[0]) || isNaN(count)) { 
    result = "Введите число";
} else { 
    totalPrice = pricePerDroid * count;
}

if(!result) {
    
    if((credits - totalPrice) <= 0) {  
        
        console.log("Недостаточно средств на счету!.");
    } else {
        
        credits = credits - totalPrice;
        console.log(`Вы купили ${count} дроидов, на счету осталось ${credits}`);
    }
} else {
    console.log(result);
}
