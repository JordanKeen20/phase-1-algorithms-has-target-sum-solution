function hasTargetSum(array, target){
//   create an object to keep track of numbers we have already seen.
const seenNumbers = {};
//   iterate through each number of the array
  for(let i = 0; i < array.length; i++){
//     for the current number, identify complement that adds to the target(comp = tareget - number)
    const complement = target - array[i];
    //       check if any key on our object is the complement
    //         if so, return true
    if(seenNumbers[complement]) return true
    //         otherwise, add that number to the object
    seenNumbers[array[i]] = true
  }


// if I reach the end of the array, return false
return false
 }

// function hasTargetSum(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     const complement = target - array[i];
//       for (let j = i + 1; j < array.length; j++) {
//         if (array[j] === complement) return true;
//     }
//   }

//   return false;
// }

/* 
  Write the Big O time complexity of your function here:
   runtime: 0(n*2)
   space: 0(n)
*/

/* 
hasTargetSum([1,2,3,4], 6)
seenNumbers{
  1:true,
  2: true,
  3: true
}
updated part of pseudocode:
  create an object to keep track of numbers we have already seen.
  iterate through each number of the array 
    for the current number, identify complement that adds to the target(comp = tareget - number)
    iterate through the rest of the array
      check if any key on our object is the complement
        if so, return true
        otherwise, add that number to the object

if I reach the end of the array, return false

*/

/*
  Add written explanation of your solution here:
    make a functon called 'hasTargetSum' that checks if two numbers from
  the array add up to some target. For example, if I have an Array '[1, 2, 3, 4,]'
  and the target'6' it should return true because 2 and 4 add to 6.
  For each number check if there's another number that adds to the target.
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
  console.log("=>", hasTargetSum([1], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-1, 2, 7, 4], 6));
}


module.exports = hasTargetSum;
