"use strict";
// 1 task
const fruits = ['Apples','Bananas','Oranges'];
console.log(fruits);
console.log(fruits[1]);
fruits[1] = 'Kiwi';
console.log(fruits);
fruits.length = 4;
fruits[3] = 'Pears';
fruits[4] = 'Grapes';
fruits[5] = 'Peaches';
console.log(fruits);
// 2 task
const test1 = [4, 12, 6, 16, 13, 8, 13, 4, 15, 11, 14, 10, 15, 12];
const score1 = 12;
for (let i = 0; i < test1.length; i += 1) {
  if (test1[i] < score1) {
    continue;
  } 
  console.log(`${test1[i]}`);
}
 // 3 task
 const test2 = [17, 13, 4, 15, 10, 12, 16, 21, 13, 8, 14, 18, 15, 20];
 const score2 = 15;
 for (let i = 0; i < test2.length; i += 1) {
  if (test2[i] < score2) {
    continue;
  } 
  console.log(`${test2[i]}`);
}
// 4 task
 const test3 = [20, 12, 16, 22, 13, 8, 13, 4, 15, 10, 14, 18, 15, 22];
 const score3 = 16;
 for (let i = 0; i < test3.length; i += 1) {
  if (test3[i] < score3) {
    continue;
  } 
  console.log(`${test3[i]}`);
}
 // 5 task
 const tests = test1.concat(test2,test3);
 for (let i = 0; i < 1; i += 1) {
  console.log(test1);
  console.log(test2);
  console.log(test3);
}