"use strict";
// 1 task
//alert( 1 && null && 2 );  // null
//alert( null || 2 && 3 || 4 ); // 3
// 2 task
//if (-1 || 0) alert( 'first' );
//if (-1 && 0) alert( 'second' );
//if (null || -1 && 1) alert( 'third' )
// third
// 3 task
let age;
if (age >= 14 && age <= 90);
if (!(age >= 14 && age <= 90)); // 1 type
if (age < 14 || age > 90); // 2 type
// 4 task
let day = prompt("Enter today day please");
let weekday;
 
switch (day) {
  case "Monday":
    weekday = "the worst workday at week";
    break;
 
  case "Tuesday":
    weekday = "a bit better workday";
    break;
 
  case "Wednesday":
    weekday = "a workday and so it`s a small Friday)";
    break;
 
  case "Thursday":
    weekday = "a strange workday";
    break;
 
  case "Friday":
    weekday = "the best workday";
    break;
 
  case "Saturday":
  case "Sunday":
    weekday = "holiday";
    break;
 
  default:
    alert("Invalid entered data");
    weekday = "invalid data";
}
 
console.log(`${day} is ${weekday}`); 

