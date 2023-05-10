var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// IIFE appraoch to print the odd numbers in the array

(function() {
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      console.log(numbers[i]);
    }
  }
})();

// Anonymus function to print the odd numbers in the array

(function(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
})(numbers);

// Using Arrow function:

var oddNumbers = numbers.filter(num => num % 2 !== 0);
oddNumbers.forEach(num => {
  console.log(num);
});
