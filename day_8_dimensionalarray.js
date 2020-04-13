// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

//Example:

//Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]
//, your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

//------------------------------------------------------------------------------------

const numbs = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];

 for( let i = 0; i < numbs.length; i++){
   numbs[i].sort();
 }

 console.log(numbs);

//FOR LOOP--------------------------------------------------------------------------------

function numb(arr){
  let newArr= [];
  for(let i = 0; i < arr.length;i++){
    for(let j = 0; j <arr[i].length; j++){
      newArr.push(arr[i][j]);
    }
     }
  return newArr.sort((a,b)=> a-b);
}
console.log(numb([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));

//arrFlat ----------------------------------------------------------------------------------------
//Flat solo functiona en version 11 de node =s
// function numb1(arr){
//   let newArr = arr.flat();
//   return newArr;
// }
// //console.log(numb1([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));
// //console.log(numb1([6, 12, 1, 18, 13, 16, 2, 1, 8, 10]));
// console.log([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]].flat());