/*
                            Filter
    filterByValue
Write a function called filterByValue which accepts an array of objects and a key and returns
a new array with all the objects that contain that key.
filterByValue(
[
  {first: 'Elie', last:"Schoppik"},
  {first: 'Tim', last:"Garcia", isCatOwner: true},
  {first: 'Matt', last:"Lane"},
  {first: 'Colt', last:"Steele", isCatOwner: true}
],
'isCatOwner'
)

/*
  [
    {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'Colt', last:"Steele", isCatOwner: true}
  ]
*/

function filterByValue(array, key){
    let newArray = [];
    array.filter(function(val){
        //console.log(val[key]);
        if(val[key]){
            //console.log(val);
            newArray.push(val);
        }
    });
    return newArray;
}
console.log(filterByValue([
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele", isCatOwner: true}
  ],
  'isCatOwner'
  ));

/*
            find
Write a function called find which accepts an array and a value and returns the first 
element in the array that has the same value as the second parameter or undefined if the 
value is not found in the array.
find([1,2,3,4,5], 3) // 3
find([1,2,3,4,5], 10) // undefined
*/

function find(array, value){
    let newValue = undefined;
    //console.log(array.indexOf(value));
    array.filter(function(val){
        //if(array[array.indexOf(value)] === val){ // works for no repeat
        if(array[array.indexOf(value)] == val){
            //console.log(value);
            newValue = value;
        }else{
        return newValue;
        }
    });
    return newValue;
}
console.log(find([1,2,3,4,5], 3));
console.log(find([1,2,3,4,5, 3, 3], 3));
console.log(find([1,2,3,4,5, 3], 1));
console.log(find([1,2,3,4,5], 10));

/*
            findInObj
Write a function called findInObj which accepts an array of objects, a key, and some value 
to search for and returns the first found value in the array.
findInObj(
  [
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'att', last:"Lane"},
    {first: 'Colt', last:"Steele", isCatOwner: true}
  ],
  'isCatOwner',
  true
)

/ {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(array, key, value){
    let firstValueFound = undefined;
    firstValueFound = array.filter(function(val){
       return val[key] === value;
   });
    return firstValueFound[0];
}
console.log(findInObj(
    [
      {first: 'Elie', last:"Schoppik"},
      {first: 'Tim', last:"Garcia", isCatOwner: true},
      {first: 'att', last:"Lane"},
      {first: 'Colt', last:"Steele", isCatOwner: true},
    ],
    'isCatOwner',
    true
  ));

  /*
            removeVowels
Write a function called removeVowels which accepts a string and returns a new string with 
all of the vowels (both uppercased and lowercased) removed. Every character in the new 
string should be lowercased.
removeVowels('Elie') // ('l')
removeVowels('TIM') // ('tm')
removeVowels('ZZZZZZ') // ('zzzzzz')
  */
 
 function removeVowels(str){
    let vowels = "aeiou";
    let newString = " ";
    let stringToLowerCase = str.toLowerCase();
    let arrayFormed = Array.from(stringToLowerCase);
    let obtainedString = (arrayFormed.filter(function(val){
        return vowels.indexOf(val) === -1;
     }));
    for(let i = 0; i< obtainedString.length; i++){
        newString += obtainedString[i];
     }
    return newString;
 }
 console.log(removeVowels('Elie'));
 console.log(removeVowels('TIM'));
 console.log(removeVowels('ZZZZZZ'));

 /*
        doubleOddNumbers
Write a function called doubleOddNumbers which accepts an array and returns a new array with 
all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter 
the odd numbers).
doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
doubleOddNumbers([4,4,4,4,4]) // []
*/
function doubleOddNumbers(array){
    //let newArray = [];
    let newElements = (array.filter(function(val){
        return val % 2 !== 0;
    }));
    let doubledValue = newElements.map(function(value){
        return value*2;
    });
    return doubledValue;
}
console.log(doubleOddNumbers([1,2,3,4,5]));
console.log(doubleOddNumbers([4,4,4,4,4]));

  