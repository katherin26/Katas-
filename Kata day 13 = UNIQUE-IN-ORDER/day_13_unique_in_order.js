/*Implement the function unique_in_order which takes as argument a sequence and returns
 a list of items without any elements with the same value next to each other and preserving 
 the original order of elements.*/

//SOLUTION WITH FUNCTION unique in order-------------------------------------------------//
function unique_in_order(sequence) {
  let arrayToFilter = Array.isArray(sequence) ? sequence : sequence.split(""); //ternary operation !

  let filtered = arrayToFilter.filter(function (word, index) {
    if (arrayToFilter.indexOf(word) === index) {
      return true;
    } else {
      return false;
    }
  });
  return filtered;
}

console.log(unique_in_order("AAAABBBCCDAABBB")); //['A','B','C','D]
console.log(unique_in_order("ABBCcAD")); //['A','B','C','c','D']
console.log(unique_in_order([1, 2, 2, 3, 3])); //[1,2,3]

//SOLUTION WITH STRING ONLY-------------------------------------------------------------//

const str = "AAAABBBCCDAABBB";

const result = str.split("");
const filtered = result.filter(function (word, index) {
  if (result.indexOf(word) === index) {
    return true;
  }
});

console.log(filtered); //['A','B','C','D'];
