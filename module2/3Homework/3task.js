"use strict";
// ============== 1 =========================================
// Напиши функцию toPassTests как FUNCTION EXPRESSION 
// (функциональное выражение через переменную)
// и как ARROW FUNCTION (стрелочная функция),
// которая выводит пользователю всплывающее окно с сообщением
// Прежде, чем выполнить это задание у тебя должно быть сдано пять тестов!
// и вызови эту функцию
// убедись, что функция выполнилась при любом ее выражении
 
// FUNCTION EXPRESSION
toPassTest = function(a){
    alert("Прежде, чем выполнить это задание у тебя должно быть сдано пять тестов!")
};
 
// ARROW FUNCTION
// тут объяви функцию как ARROW FUNCTION
    toPassTest = () => alert("Прежде, чем выполнить это задание у тебя должно быть сдано пять тестов!");
// вызов функции
toPassTest(a);
 
// ============== 2 =========================================
// Напиши функцию checkAge как FUNCTION EXPRESSION 
// (функциональное выражение через переменную)
// и как ARROW FUNCTION (стрелочная функция),
// которая проверяет значение возраста, которое пользователь ввел в модальное окно
// и выводит пользователю всплывающее окно с сообщением
// если возраст равен или более 18, то - Here you are! You are got access!
// в остальных случаях - Sorry, you can't to get access
// и вызови эту функцию
// убедись, что функция выполнилась при любом ее выражении
// FUNCTION EXPRESSION
// тут объяви функцию как FUNCTION EXPRESSION
 
// ARROW FUNCTION
// тут объяви функцию как ARROW FUNCTION
 
// вызов функции
// тут вызывай функцию
 
// ============== 3 =========================================
// Напиши скрипт подсчета стоимости гравировки украшений.
// Для этого создай функцию toGetCost(message, pricePerWord)
// как FUNCTION EXPRESSION и как ARROW FUNCTION
// принимающую строку (в строке будут только слова и пробелы) и цену гравировки
// одного слова, и возвращающую цену гравировки всех слов в строке.
// и вызови эту функцию
// убедись, что функция выполнилась при любом ее выражении
 
// FUNCTION EXPRESSION
// тут объяви функцию как FUNCTION EXPRESSION
 
// ARROW FUNCTION
// тут объяви функцию как ARROW FUNCTION
 
// вызов функции
// используй эти консоли для проверки своего кода
 
// console.log(toGetCost("To be, or not to be, that is the question", 10)); // 100
// console.log(toGetCost("Whether 'tis nobler in the mind to suffer", 20)); // 160
// console.log(toGetCost("The slings and arrows of outrageous fortune,", 40)); // 280
// console.log(toGetCost("Or to take arms against a sea of troubles", 20)); // 180
 
// ============== 4 ==========================================
// Напиши функцию logItems(array), которая получает массив и использует цикл for,
// который для каждого элемента массива будет выводить в консоль сообщение
// в формате [номер элемента] - [значение элемента].
// Нумерация должна начинаться с 1. К примеру для первого
// элемента массива ['Mango', 'Banana', 'Ajax']
// с индексом 0 будет выведено '1 - Mango',
// а для индекса 2 выведет '3 - Ajax'.
// const array = ['Mango', 'Banana', 'Ajax'];
 
// // FUNCTION EXPRESSION
 
// Вызовы функции для проверки кода
logItems([
    "Wolverine",
    "Thor",
    "Iron Man",
    "Deadpool",
    "Nick Fury",
    "Colossus"
  ]);
   
  logItems([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
   
  // ============== 5 =========================================
  // Напиши функцию checkTheWord(message) как FUNCTION EXPRESSION и как ARROW FUNCTION,
  // принимающую 1 параметр message - строку.
  // Функция проверяет ее на содержание слов lose и not. Если нашли запрещенное слово
  // то функция возвращает true, если запрещенных слов нет функция возвращает false.
  // Слова в строке могут быть в произвольном регистре.
   
  // FUNCTION EXPRESSION
  // тут объяви функцию как FUNCTION EXPRESSION
   
  // ARROW FUNCTION
  // тут объяви функцию как ARROW FUNCTION
   
  // вызов функции
  // используй эти консоли для проверки своего кода
  console.log(checkTheWord("Than fly to others that we know not of?")); // true
  console.log(checkTheWord("Thus conscience does make cowards of us all")); // false
  console.log(checkTheWord("And enterprises of great pitch and moment")); // false
  console.log(checkTheWord("And lose the name of action")); // true
   
  // ============== 6 =========================================
  // Напиши функцию countTestsScore() как FUNCTION EXPRESSION,
  // принимающую при вызове все аргументы в виде псевдомассива arguments,
  // Функция суммирует все полученные аргументы, независимо от их количества при вызове.
  // в переменную totalSum и выводит это значение в консоль
   
  // FUNCTION EXPRESSION
  // тут объяви функцию как FUNCTION EXPRESSION
   
  // Вызовы функции для проверки кода
  countTestsScore(16, 22, 23); // укажи результат 
  countTestsScore(15, 20, 22, 20); // укажи результат 
  countTestsScore(14, 19, 21, 20, 23); // укажи результат 
   
  // ============== 7 =========================================
  // Напиши функцию myNewArrowFunction() как ARROW FUNCTION,
  // принимающую при вызове все аргументы с помощью ...rest ,
  // и выводит массив этих аргументов в консоль
   
  // ARROW FUNCTION
  // тут объяви функцию как ARROW FUNCTION
   
  // Вызовы функции для проверки кода
  myNewArrowFunction(1, 2, 3); // укажи результат 
  myNewArrowFunction(100, 200, 300, 400, 500); // укажи результат 
  myNewArrowFunction("Js", "Python", "Java", "PHP", "C++"); // укажи результат 
  