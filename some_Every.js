
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

/*
        hasAZero
Write a function called hasAZero which accepts a number and returns true if that number 
contains at least one zero. Otherwise, the function should return false
hasAZero(33321232131012) // true
hasAZero(1212121) // false
*/
function hasAZero(number){
    let numberToString = number.toString();
    let arrayFormed = numberToString.split('');
    //console.log(typeof(arrayFormed)); // shows that arrayFormed is an object
    return arrayFormed.some(function(val){
        //console.log(val);
        return val.indexOf(0) !== -1;
    });
}
console.log(hasAZero(33321232131012));
console.log(hasAZero(1212121));