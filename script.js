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


/////////////////////////////
function arithmetic(a, b, operator){
  //your code here!
  switch (operator) {
  case "add":
    //Здесь выполняются инструкции, если результат выражения равен "add"
      return a + b;
    break;
  case "subtract":
    //Инструкции, соответствующие "subtract"
      return a - b
    break;
  case "multiply":
    //Инструкции, соответствующие значению "multiply"
      return a * b
    break;
        case "divide":
    //Инструкции, соответствующие значению "divide"
      return a / b
    break;
  default:
    //Здесь находятся инструкции, которые выполняются при отсутствии соответствующего значения
    //statements_def
    break;
}
}


/////////////////////////
// Write the "square"-function here
function square (n){
  return n*n
}
