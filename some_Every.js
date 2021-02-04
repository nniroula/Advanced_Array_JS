
                    /* Some and Every Array functions */
/*
        hasOddNumber
Write a function called hasOddNumber which accepts an array and returns true if the array 
contains at least one odd number, otherwise it returns false.
hasOddNumber([1,2,2,2,2,2,4]) // true
hasOddNumber([2,2,2,2,2,4]) // false
*/
function hasOddNumber(array){
   return array.some(function(value){
        return value % 2 !== 0;
    })
}
console.log(hasOddNumber([1,2,2,2,2,2,4]));
console.log(hasOddNumber([2,2,2,2,2,4]));