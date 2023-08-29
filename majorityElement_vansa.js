// function majorityElement(nums) {
//     nums.sort((number1, number2) => number1 - number2);
  
//     const number = nums.length;
  
//     if (number % 2 === 0) {
//       return nums[number / 2]
//     } else {
//       return nums[(number - 1) / 2]
//     }
//   }
  
//   console.log(majorityElement([3, 2, 3])); // Output: 3 
//   console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2 
//   console.log(majorityElement([3, 2, 3, 1, 4, 3, 5, 5, 3, 4, 5, 5]));


  function majorityElement(nums) {
    let numsObj = {};
   let maxFreq = 0;
   let maxElement = null;
 for (let num of nums) {
     numsObj[num] = numsObj[num] + 1 || 1;
   }
 for (num in numsObj) {
     if (numsObj[num] > maxFreq) {
       maxFreq = numsObj[num];
       maxElement = parseInt(num);
     }
   }
   return maxElement;
 }
 
 console.log(majorityElement([3, 2, 3, 4])); // Output: 3 
 console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
