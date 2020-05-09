"use strict";
// ==================== 1 ========================
// Напиши скрипт, который, для объекта user, последовательно:
// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'coding'
// заменяет значение premium на false
// выводит с помощью функции toShowUpdatedUser(obj) содержимое переданного ей
// объекта user, в формате пар (ключ:значение), используя Object.keys() и for...of
 
const user = {
  name: "Semen",
  age: 15,
  hobby: "html",
  premium: true,
};
user.mood = 'happy';
user.hobby = 'coding';
user.premium = 'false';
 
const toShowUpdatedUser = function (obj) {
  for (let [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
  }
};
// вызови свою функцию и проверь результат
toShowUpdatedUser(user);
// name: Semen
// age: 15
// hobby: coding
// premium: false
// mood: happy
 
 
// ==================== 2 ========================
// Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
// Функция возвращает число - количество свойств.
 
const countProps = function (obj) {
  return Object.keys(obj).length;
};
 
// Вызовы функции для проверки работоспособности твоей реализации.
console.log(countProps({})); // 0
 
console.log(countProps({ name: "Mango", age: 2 })); // 2
 
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
 
 
// ==================== 3 ========================
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
// Функция считает общую сумму зарплаты работников и возвращает ее.
// Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".
 
const countTotalSalary = function (employees) {
  return Object.values(employees).reduce((a, b) => a + b, 0)
  };
 
// Вызовы функции для проверки работоспособности твоей реализации.
console.log(countTotalSalary({})); // 0
 
console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330
console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
 
 
// ==================== 4 ========================
// Напиши функцию calculateTotalPrice(allProdcuts, productName),
// которая получает массив объектов и имя продукта (значение свойства name).
// Возвращает общую стоимость продукта (цена * количество).
 
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];
 
const calculateTotalPrice = function (allProdcuts, productName) {
  let res = 0;
  for (let i = 0; i < allProdcuts.length; i += 1){
    if (allProdcuts[i].name == productName){
      res = allProdcuts[i].price * allProdcuts[i].quantity;
      break;
    }
  }
  return res;
 };
 
// Вызовы функции для проверки работоспособности твоей реализации.
console.log(calculateTotalPrice(products, "Радар")); // 5200
console.log(calculateTotalPrice(products, "Дроид")); // 2800