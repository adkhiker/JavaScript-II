// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  let alength = arr.length;
  return cb(alength);
}
getLength(items, function(output) {
  console.log(`getLength() output:\n${output}`);
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  let lastItem = arr.pop();
  return cb(lastItem);
}
last(items, function(output) {
  console.log(`\nlast() output:\n${output}`);
});

function sumNums(num1, num2, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let sum = x + y;
  return cb(sum);
}
sumNums(8, 12, function(output) {
  console.log(`\nsumNums() output:\n${output}`);
});

function multiplyNums(num1, num2, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let product = num1 * num2;
  return cb(product);
}
multiplyNums(7, 8, function(output) {
  console.log(`\nmultiplyNums() output:\n${output}`);
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if (list.includes(item)) {
    return cb(true);
  } else {
    return cb(false);
  }
}
contains("yo-yo", items, function(output) {
  console.log(`\ncontains() output:\n${output}`);
});


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
