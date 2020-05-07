'use strict';


let Total = 0;
let input = +prompt('Введите число');
while(input){
	Total += input;
	input = +prompt('Введите число');
};
alert("Общая сумма чисел равна " + Total +"");