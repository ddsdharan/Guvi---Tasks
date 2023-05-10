var numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// IIFE approach:
(function() {
    var primeNumbers = numbers.filter(function(num) {
      if (num < 2) {
        return false;
      }
      for (var i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    });
    console.log("Prime numbers:", primeNumbers);
  })();
  
// Anonymus function:

(function(arr) {
  var primeNumbers = arr.filter(function(num) {
    if (num < 2) {
      return false;
    }
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  });
  console.log("Prime numbers:", primeNumbers);
})(numbers);

// Arrow function:

((arr) => {
  const primeNumbers = arr.filter((num) => {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  });
  console.log("Prime numbers:", primeNumbers);
})(numbers);
