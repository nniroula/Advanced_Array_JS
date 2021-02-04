
/*
                forEach
doubleValues
Write a function called doubleValues which accepts an array and returns a new array with all 
the values in the array passed to the function doubled
doubleValues([1,2,3]) // [2,4,6]
doubleValues([5,1,2,3,10]) // [10,2,4,6,20]
*/

function doubleValues(array){
    let newArray = [];
    array.forEach(function(val){
        newArray.push(val*2);
    });
    return newArray;
}
console.log(doubleValues([1, 2, 3]));
console.log(doubleValues([5,1,2,3,10]));

/*
        onlyEvenValues
Write a function called onlyEvenValues which accepts an array and returns a new array with 
only the even values in the array passed to the function
onlyEvenValues([1,2,3]) // [2]
onlyEvenValues([5,1,2,3,10]) // [2,10]
*/

function onlyEvenValues(array){
    let newArray = [];
    array.forEach(function(val){
        if(val % 2 === 0){
            newArray.push(val);
        }
    });
    return newArray;
}
console.log(onlyEvenValues([1,2,3]));
console.log(onlyEvenValues([5,1,2,3,10]));


/*
        showFirstAndLast
Write a function called showFirstAndLast which accepts an array of strings and returns a new 
array with only the first and last character of each string.
showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
*/

function showFirstAndLast(array){
    let newArray = [];
    array.forEach(function(val){
        newArray.push(val[0] + val[val.length-1]);
    });
    return newArray;
}
console.log(showFirstAndLast(['colt','matt', 'tim', 'test']));
console.log(showFirstAndLast(['hi', 'goodbye', 'smile']));

/*
        addKeyAndValue
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value
and returns the array passed to the function with the new key and value added for each object
addKeyAndValue(
[
  {name: 'Elie'},
  {name: 'Tim'},
  {name: 'Matt'},
  {name: 'Colt'}
],
  'title',
  'instructor'
)

/*
  [
    {name: 'Elie', title:'instructor'},
    {name: 'Tim', title:'instructor'},
    {name: 'Matt', title:'instructor'},
    {name: 'Colt', title:'instructor'}
  ]
*/

function addKeyAndValue(array, key, value){
    let newArray = [];
    array.forEach(function(val){
        val[key] = value;
        newArray.push((val));
    });
    //console.log(val); // to check if val returns correct output
    return newArray;
}
//console.log(addKeyAndValue([{name: 'Elie'}], 'title', 'instructor'));
console.log(addKeyAndValue([
    {name: 'Elie'},
    {name: 'Tim'},
    {name: 'Matt'},
    {name: 'Colt'}
  ],
    'title',
    'instructor'
  ));
  

  /*
        vowelCount
Write a function called vowelCount which accepts a string and returns an object with the keys 
as the vowel and the values as the number of times the vowel appears in the string. This 
function should be case insensitive so a lowercase letter and uppercase letter should count
vowelCount('Elie') // {e:2,i:1};
vowelCount('Tim') // {i:1};
vowelCount('Matt') // {a:1})
vowelCount('hmmm') // {};
vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1}
  */
 
 function vowelCount(str){
     let obj = {};
     let vowels = "aeiou";
     let arrayFormed = Array.from(str); // this makes an array
     arrayFormed.forEach(function (val){
         // get val to lowercase for first E in Elie.
         let valToLowerCase = val.toLowerCase();
        if(vowels.indexOf(valToLowerCase) !== -1){
            // if more letters of a particular vowel exist, increase the count of it in next round
           if(obj[valToLowerCase]){
                obj[valToLowerCase] = obj[valToLowerCase] + 1;
            }else{
                //if there is only one vowel
                obj[valToLowerCase] = 1;
            }
        }
     });
     return obj;
 }
 console.log(vowelCount('Elie'));
 console.log(vowelCount('Tim'));
 console.log(vowelCount('Matt'));
 console.log(vowelCount('I Am awesome and so are you'));
 

