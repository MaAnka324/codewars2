//1
function bmi(weight, height) {
   let b = weight/Math.pow(height, 2);
   if(b <= 18.5){
    return "Недостаточный вес"
   }
   else if(b <= 25){
    return "Нормальный"
   }
   else if(b <= 30){
    return "Избыточный вес"
   }
   else{
    return "Ожирение"
   }
  }
  bmi(80, 1.8);


// Sum Numbers
function sum (numbers) {
    "use strict";
  let sum = 0;
    for(let i=0; i<numbers.length; i++){  
      sum += numbers[i];
      }
  return sum
};