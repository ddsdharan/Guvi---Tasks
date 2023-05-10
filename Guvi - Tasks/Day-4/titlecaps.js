// IIFE to convert all the strings to title caps in a string array
var stringArray = ["hello world", "javascript is awesome", "welcome to guvi", "this is iife and anonymus functions"];

(function() {
    var titleCapsArray = stringArray.map(function(str) {
      return str.split(" ").map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(" ");
    });
    console.log(titleCapsArray);
  })();
  
//   Anonymus function to convert all the strings to title caps in a string array

(function(arr) {
  var titleCapsArray = arr.map(function(str) {
    return str.split(" ").map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  });
  console.log(titleCapsArray);
})(stringArray);

// Using Arrow function:

const titleCapsArray = stringArray.map(str => {
  return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
});

console.log(titleCapsArray);
