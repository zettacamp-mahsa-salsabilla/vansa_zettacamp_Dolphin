//TASK number 1, point a
let favBook = 'John Davison Rockefeller';
const favBook2 = 'Henry Ford';
let equal = favBook == favBook2
console.log(equal)

let favBook3 ='Walt Disney';
let favBook4 = 'Walt Disney';
let equal1 = favBook3 == favBook4
console.log(equal1)

    //Strict Equal
    let strictEqual1 = favBook === favBook2
    console.log(strictEqual1)
    let strictEqual2 = favBook3 === favBook4
    console.log(strictEqual2)

//TASK number 2 , point a
let price = 119.000;
const price2 = 110.000;
let result = price > price2
console.log(result)

//TASK number 2, point b
let averageResult = (price + price2)/2;
console.log(averageResult)

//TASK number 2, point c
  //  let averagePrice1 = 550000;
  //  let averagePrice2 = 450000;
  //  const averagePrice = 500000;
  //  if (averagePrice1 > averagePrice)
  // {
  //   console.log("Expensive");
  //   } 
  //   else {
  //   console.log("Cheap");
  // }
  
  let averagePrice = 450000;
  let resultPrice = (averagePrice > 500000)? 'Expensive':'Cheap';
  
  console.log(resultPrice)
  
//LOGIC TEST
function max_of_two(a, b) {
    if (a > b){
      return a;
    }
    else{
      return b;
  }
  }
  console.log(max_of_two(10, 50));
  console.log(max_of_two(45, 66));


//...........................................................................//


// Conditional TERNARY Operators
function getFee(isMember) {
   return isMember ? '$2.00' : '$10.00';
 }

// if else
function getFee2(isMember) {
   if (isMember) {
       return '$2.00'
   } else {
       return '$10.00'
   }
 }
 console.log(getFee(true));

//Arithmetic Operators
  //Add two numbers
  let addValue = 2;
  addValue = addValue + 10;
  
  console.log(addValue);
  
  //Add two numbers v.2
  let addValue1 = 8;
  let addValue2 = 2;
  let resultAdd = addValue1 + addValue2;
  
  console.log(resultAdd);
  
  //substract, multiply, divide, mod, exponentiation
  let a = 15;
  let b = 10;
  let c = 5;
   
  //substract
  let resultSubstract = a - b;
  console.log(resultSubstract);
  
  //multiply
  let resultMultiply = b * c;
  console.log(resultMultiply);
  
  //divide
  let resultDivide = b / c;
  console.log(resultDivide);
  
  //mod
  let resultMod = b % c;
  console.log(resultMod);
  
  //exponentiation
  let resultExponentiation = c ** c;
  console.log(resultExponentiation);

//increment(++)
    let incVal = 10;
    incVal++
    console.log(incVal);
    incVal++
    console.log(incVal);