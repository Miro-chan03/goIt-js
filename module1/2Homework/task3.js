"use strict";
// 1 task
const var1 = 1;
const var2 = 0;
const var3 = true;


console.log(var1 > var2);//true 1>0
console.log(var1 == var3);//true  При использовании == для проверки равенства, происходит приведение типов операндов. 1 = true
console.log(var1 === var3);//false  При использовании === для проверки равенства, все равно только себе. Перед оценкой ничего не преобразуется. 
console.log(var1 != var3);//false  При использовании == для проверки равенства, происходит приведение типов операндов. 1 = true; 
console.log(var2 != var3);//true  0 = false //true;
// 0 != true (true)
console.log(var1 > var2 == var3);//true 
console.log(var1 > var2 > var3);//false

// 2 task

let val;
console.log(val);
val = "River";
console.log(isNaN(val)); //true
console.log(typeof val); //string

val = "Mountain";
console.log(isNaN(val)); // true
console.log(typeof val); // string

val = 232;
console.log(isNaN(val)); // false
console.log(typeof val); // number

val = true;
console.log(isNaN(val)); // false
console.log(typeof val); // boolean

val =  null;
console.log(isNaN(val)); // false
console.log(typeof val); // object

// 3 task

let alfa = 0.2;
let beta = 0.4;
let result;
result = (alfa * 10 + beta * 10) / 10 ;
console.log(result);

// 4 task
let tetra = "12px";
console.log(Number.parseInt(tetra));//12
tetra = "13.34em";
console.log(Number.parseFloat(tetra));//13.34
// 5 task

console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18)); //733
console.log(Math.min(2, 34, 99, 3, 22, 36, 733, 18));//2

// 6 task

console.log((Math.random() * (19 - 3) + 1).toFixed(2));