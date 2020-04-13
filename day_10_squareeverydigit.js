// Welcome. In this kata, you are asked to square every digit of a number.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

function squareDigitss(num){
  return parseInt(num.toString().split('').map(n=> n*n).join(''))
}

console.log(squareDigitss(9119));

//--------------------------------------------------------------------------------
//Math.pow ===> agregar dentro de la funcion
console.log(Math.pow(9,2));


