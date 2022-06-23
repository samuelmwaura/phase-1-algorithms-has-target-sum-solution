function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i=0;1<array.length;i++){
  const complement = target - array[i];
  for(let j=i+1;j<array.length;j++){
   if(array[i]===complement) return true

  }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here.

  for(let i=0;1<array.length;i++){  - n steps in an array of length n.
  const complement = target - array[i];  //single step taking constant time.
  for(let j=i+1;j<array.length;j++){  - n*n steps since it's a loop inside a loop
   if(array[i]===complement) return true  

   The time complexity for this algorithm is O(n^2 which is a quadaratic time)
   The space requirement for this function as the length of the array grows.Hence it is fully linear O(n)

//REFACTORING FOR REDUNDANCY

for(let i=0;1<array.length;i++){
  const complement = target - array[i];
  for(let j=i+1;j<array.length;j++){
   if(array[i]===complement) return true

  }
  }
  return false
}


This algorithm cannot be simplified further.

*/

/* 
  Add your pseudocode here
  Iterate through every element of the array . For the current number, 
  identify a  complement within the array that adds up to the target.i.e (target - currentNumber = complement);.
  Iterate through the array checking if any of the numbers is the complement of the current.If it is, return true.
  On reaching the end of the array and no complements for the target were found, return false.
*/
/*
  Add written explanation of your solution here
  I need make a function that checks if two numbers from an array add up to some target e.g [3, 8, 12, 4, 11, 7], 10).
  Whether there is any pair in the numbers that adds up to 10.So for each number, I should check whether there is any 
  complement that adds up to  the target. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
