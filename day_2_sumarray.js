//KATA DAY 2 

//You get an array of numbers, return the sum of all of the positives ones.

//Example [1,-4,7,12] => 1 + 7 + 12 = 20

//Note: if there is nothing to sum, the sum is default to 0.

//Lets star with Foor Loops ! 
//------------------------------------------------------------------------------------//

//KATA DAY 2 

//You get an array of numbers, return the sum of all of the positives ones.

//Example [1,-4,7,12] => 1 + 7 + 12 = 20

//Note: if there is nothing to sum, the sum is default to 0.

//Lets star with Foor Loops ! 
//------------------------------------------------------------------------------------//
//For Loop =)

function positiveSum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
      if(arr[i] > 0)
        sum = sum + arr[i]//this is the operation other way is suma1 += numbers[i]
    }
      return sum;// and you return the result 
  
  }
  console.log((positiveSum([1,2,3,4,5]),15));
  console.log((positiveSum([1,-2,3,4,5]),13));
  console.log((positiveSum([]),0));
  console.log((positiveSum([-1,-2,-3,-4,-5]),0));
  console.log((positiveSum([-1,2,3,4,-5]),9));
  
  //------------------------------------------------------------------------------------//
  //Example with for in 
  let numbersArr = [1,-2,1,2,3];
  
  let suma = 0;
  for (let i in numbersArr){
    if(numbersArr[i] > 0){
      suma += numbersArr[i];
    }
  }
  console.log(suma);//7
  
  //---------------------------------------------------------------------------------------//
  //Using for of 
  
  let numbersArr1 = [1,2,3,4,5];
  
  let suma0 = 0;
  for (let value of numbersArr1){
    if(value > 0)
    suma0 += value;
  }
  
  console.log(suma0);//15
  
  //--------------------------------------------------------------With the reduce method 
  
  // EJEMPLO CON REDUCE AND FUNCTION 
  
  let numbers = [-1,-2,1,2,3];//6
  
  //Using arrow function 
  let suma1 = numbers.filter(n => n > 0).reduce((suma,n)=> suma += n, 0);
  console.log(suma1);//in this exercise filter we put the conditional = n > 0 and reduce is the sum on all that result.
  
  
  //Using regular function 
  let suma2 = numbers.filter(function(n){
    if(n > 0)//is like filter we are comparing 
     return true;
    else
     return false;
  }).reduce(function(suma,n){
    suma += n;// is the total 
    return suma;
  });
  
  console.log(suma2);//6
  
  //-----------------------------------------------------------------------------------//
  
  
  