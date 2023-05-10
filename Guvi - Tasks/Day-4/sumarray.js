// IIFE approach to find the sum of all numbers in the array
var numbers = [1, 2, 3, 4, 5];

(function() {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    console.log("The sum of the numbers in the array is =",sum);
  })();
    
// Using Anonymus function:

  (function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    console.log("The sum of the numbers in the array is =",sum);
  })(numbers);
  
// Using Arrow Function:

((arr) => {
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  console.log("The sum of the numbers in the array is =",sum);
})(numbers);
