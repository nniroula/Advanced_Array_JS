
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

/*
            hasOnlyOddNumbers
Write a function called hasOnlyOddNumbers which accepts an array and returns true if every 
single number in the array is odd. If any of the values in the array are not odd, the 
function should return false.
hasOnlyOddNumbers([1,3,5,7]) // true
hasOnlyOddNumbers([1,2,3,5,7]) // false
*/
function hasOnlyOddNumbers(array){
    return array.every(function(val){
        return val % 2 === 1;
    });
}
console.log(hasOnlyOddNumbers([1,3,5,7]));
console.log(hasOnlyOddNumbers([1,2,3,5,7]));

/*
hasNoDuplicates
Write a function called hasNoDuplicates which accepts an array and returns true if there are
 no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.
hasNoDuplicates([1,2,3,1]) // false
hasNoDuplicates([1,2,3]) // true
*/
function hasNoDuplicates(array){
    //find an index of an element, also find lastIndexOf that element; compare them if they hold the same value
    return array.every(function(val){
        return array.indexOf(val) === array.lastIndexOf(val);
      });
}
console.log(hasNoDuplicates([1,2,3,1]));
console.log(hasNoDuplicates([1,2,3])); 
console.log(hasNoDuplicates([]));
console.log(hasNoDuplicates([1,2,2]));

/*
        hasCertainKey
Write a function called hasCertainKey which accepts an array of objects and a key, and returns 
true if every single object in the array contains that key. Otherwise it should return false.
let arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

  hasCertainKey(arr,'first') // true
  hasCertainKey(arr,'isCatOwner') // false
*/
function hasCertainKey(array, key){
    return array.every(function(val){
        if(val[key]){
            return true;
        }
    });
}
let arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]
console.log(hasCertainKey(arr,'first'));
console.log(hasCertainKey(arr,'isCatOwner'));


