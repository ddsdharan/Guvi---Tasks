var words = ["level", "hello", "madam", "mom", "radar", "java", "anna", "bob", "noon", "car"];

// Palindromes using IIFE approach:

(function() {
    var palindromes = words.filter(function(word) {
      var reversed = word.split("").reverse().join("");
      return word === reversed;
    });
    console.log("Palindromes:", palindromes);
  })();

//   Palindromes using anonymus function:

  (function(arr) {
    var palindromes = arr.filter(function(word) {
      var reversed = word.split("").reverse().join("");
      return word === reversed;
    });
    console.log("Palindromes:", palindromes);
  })(words);
  
//   Palindromes using arrow function:

((arr) => {
    const palindromes = arr.filter((word) => {
      const reversed = word.split("").reverse().join("");
      return word === reversed;
    });
    console.log("Palindromes:", palindromes);
  })(words);