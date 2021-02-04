
/*
                            MAP
doubleValuesWithMap
Write a function called doubleValuesWithMap which accepts an array and returns a new array 
with all the values in the array passed to the function doubled
doubleValuesWithMap([1,2,3]) // [2,4,6]
doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
function doubleValuesWithMap(arr) {}
*/
function doubleValuesWithMap(array){
    let newArray = [];
    array.map(function(val){
        newArray.push(val*2);
    });
    return newArray;  
}
console.log(doubleValuesWithMap([1,2,3]));
console.log(doubleValuesWithMap([1,-2,-3]));
console.log(doubleValuesWithMap([]));

/*
Write a function called valTimesIndex which accepts an array and returns a new array with 
each value multiplied by the index it is currently at in the array.
valTimesIndex([1,2,3]) // [0,2,6]
valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/
function valTimesIndex(array){
    let newArray = [];
    array.map(function(val){
       newArray.push(array.indexOf(val)*val);
    });
    return newArray;
}
console.log(valTimesIndex([1,2,3]));
console.log(valTimesIndex([1,-2,-3]));
console.log(valTimesIndex([]));

/*
            extractKey
Write a function called extractKey which accepts an array of objects and some key and returns 
a new array with the value of that key in each object.
extractKey(
  [
    {name: 'Elie'},
    {name: 'Tim'},
    {name: 'Matt'},
    {name: 'Colt'}
  ],
  'name'
)
  / ['Elie', 'Tim', Matt', 'Colt']
*/

function extractKey(array, key){
    let newArray = [];
    array.map(function(val){
        //console.log(val[key]);
        newArray.push(val[key]);
    });
    return newArray;
}
console.log(extractKey([
    {name: 'Elie'},
    {name: 'Tim'},
    {name: 'Matt'},
    {name: 'Colt'}
  ],
  'name'
));

/*
        extractFullName
Write a function called extractFullName which accepts an array of objects and returns a new 
array with the value of the key with a name of “first” and the value of a key with the name 
of “last” in each object, concatenated together with a space.
/*
extractFullName([
  {first: 'Elie', last:"Schoppik"},
  {first: 'Tim', last:"Garcia"},
  {first: 'Matt', last:"Lane"},
  {first: 'Colt', last:"Steele"}
])
  / ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(array){
    let newArray = [];
    array.map(function(val){
        newArray.push(`${val.first} ${val.last}`);
    });
    return newArray;
}
console.log(extractFullName([
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia"},
    {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele"}
  ]));

