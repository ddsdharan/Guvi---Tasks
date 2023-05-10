// Rotate an array by k times using IIFE approach
var array = [1, 2, 3, 4, 5];
var k = 3;
(function() {
    var rotatedArray = (function(arr, rotations) {
      var length = arr.length;
      rotations = rotations % length;

      var rotated = arr.slice(rotations, length).concat(arr.slice(0, rotations));
      return rotated;
    })(array, k);
    console.log("Rotated array:", rotatedArray);
  })();
  
