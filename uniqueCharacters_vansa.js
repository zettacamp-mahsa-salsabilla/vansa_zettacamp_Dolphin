// function hasUniqueCharacters(str){
//   for (let a = 0; a < str.length; a++) {
//   if (str.split(str[a]).length > 2) {
//     return false;
//   }
// }
// return true;
// };
// console.log(hasUniqueCharacters("abcdefg")); //true
// console.log(hasUniqueCharacters("hello")); //false

//..........................................//

// function hasUniqueCharacters(str){
//   return new Set(str).size == str.length;

// }
// console.log(hasUniqueCharacters("abcdefg")); // Output: true
// console.log(hasUniqueCharacters("hello")); // Output: false

//..........................................//

function hasUniqueCharacters(str){
    for (let a = 0; a < str.length; a++) {
      for (let b = 1 + a; b < str.length; b++) {
        if (str[a] === str[b]) {
          return false;
        }
      }
    }
    return true;
  }
  console.log(hasUniqueCharacters("abcdefg")); // Output: true
  console.log(hasUniqueCharacters("hello")); // Output: false