"use strict";
// 1 task
const authors = ['William Shakespeare', 'Guy de Maupassant', 'Dante Alighieri', 'Mikhail Bulgakov', 'Albert Camus', 'Erich Maria Remarque'];
authors[5] =  'Honore de Balzac';
authors[6] = 'Miguel de Cervantes';
authors[7] = 'Anton Chekhov';
authors.unshift('Charles Dickens', 'Edgar Allan Poe','Gabriel Garcia Marquez');
console.log(authors);// 11
// 2 task
const scores = [12, 32, 15, 17, 3, 4, 98, 67, 532, 611, 7, 100, 42];
scores.shift(12);
scores.shift(32);
scores.pop(7);
scores.pop(100);
scores.pop(42);
console.log(scores);
// 3 task
const results = [12, 32, 15, 17, 3, 4, 98, 67, 532, 611, 7, 100, 42];
 const removeFromStart =  results.splice(0,2);
 const removeFromEnd = results.splice(8,3);
 console.log(results);
 console.log(removeFromEnd);
 console.log(removeFromStart);
 // task 4
 const partOfResults = [3, 4, 98, 67, 532,];
 //task 5
const doubleResults = [15, 17, 3, 4, 98, 67, 532, 611];
 //task 6
let evenResults =[];
let oddResults = [];
for (let i = 0; i < doubleResults.length; i += 1) {
    if ((doubleResults[i] % 2) === 0) {
      evenResults.push(doubleResults[i]);
      //continue;
      
    } 
    else {
      oddResults.push(doubleResults[i]);
    }
  }
    console.log(evenResults);
    console.log(oddResults);

 //task 7
let includesOne = [];
const AllResults = oddResults.concat(evenResults);

 for (let i = 0; i < AllResults.length; i += 1) {
   let txt = String(AllResults[i]); 
   if (txt.indexOf('1') > -1){
     includesOne.push(AllResults[i]);
   }
 }
  console.log(includesOne);

// Перебери новый массив AllResults и выбери только те элементы массива,
// которые содержат 1 и запиши эти элементы в новый массив includesOne
// "обрати внимание, что массив includesOne должен содержать элемента с типом number, а не string!

