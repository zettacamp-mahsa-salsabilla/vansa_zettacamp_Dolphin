// function containDuplicate(nums) {
//     return new Set(nums).size !== nums.length;
// }

// console.log(containDuplicate([1, 2, 3, 1])); // Output: true
// console.log(containDuplicate([1, 2, 3, 4])); // Output: false
// console.log(containDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true


function containDuplicate(nums) {
    for (let duplicateNums = 0; duplicateNums < nums.length; ++ duplicateNums) {
      for (let duplicateNums2 = 0; duplicateNums2 < duplicateNums ; ++ duplicateNums2) {
        if (nums[duplicateNums] == nums[duplicateNums2]){
          return true;
        }
      }
    }
    return false;
  }

console.log(containDuplicate([1, 2, 3, 1])); // Output: true
console.log(containDuplicate([1, 2, 3, 4])); // Output: false
console.log(containDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true


// function containDuplicate(nums) {
//   nums.sort();
//   for (let duplicateNums = 0; duplicateNums < nums.length; ++ duplicateNums) {
//         if (nums[duplicateNums] == nums[duplicateNums - 1]){
//           return true;
//         }
//     }
//     return false;
//   }

// console.log(containDuplicate([1, 2, 3, 1])); // Output: true
// console.log(containDuplicate([1, 2, 3, 4])); // Output: false
// console.log(containDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true