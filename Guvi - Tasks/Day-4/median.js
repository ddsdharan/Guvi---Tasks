// Return median of two sorted arrays of the same size.
var arr1 = [1, 3, 5, 7, 9];
var arr2 = [2, 4, 6, 8, 10];
// Using IIFE approach:

(function() {
    var mergedArray = arr1.concat(arr2);
    var sortedArray = mergedArray.sort(function(a, b) {
      return a - b;
    });
    var length = sortedArray.length;
    var median = (sortedArray[Math.floor((length - 1) / 2)] + sortedArray[Math.ceil((length - 1) / 2)]) / 2;
    console.log("Median =", median);
  })();
  
//   Using anonymus function:

(function(arr1, arr2) {
  var mergedArray = arr1.concat(arr2);
  var sortedArray = mergedArray.sort(function(a, b) {
    return a - b;
  });
  var length = sortedArray.length;
  var median = (sortedArray[Math.floor((length - 1) / 2)] + sortedArray[Math.ceil((length - 1) / 2)]) / 2;
  console.log("Median =", median);
})(arr1, arr2);
