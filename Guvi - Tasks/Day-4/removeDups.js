// Remove duplicates from an array

var array = [1, 2, 3, 4, 2, 3, 5, 6, 1, 5, 2, 3, 6, 10];

// Using IIFE approach:

(function() {
    var uniqueArray = (function(arr) {
      return arr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
      });
    })(array);
    console.log("Duplicates removed:", uniqueArray);
  })();
  