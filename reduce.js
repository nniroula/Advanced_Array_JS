/*              Reduce - a built in array function in js
        extractValue
Write a function called extractValue which accepts an array of objects and a key and returns 
a new array with the value of each object at the key.
const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(array, key){
    // create an empty array, push object into it, and return accumulator.
    // make an empty array to be a second parameter so that it becomes accumulator
    return array.reduce(function(accumulator, nextValue){
        // here accumulator is an empty array, and nextValue is an object, so push it to an empty array
        accumulator.push(nextValue[key]);
        // return accumulator back to reduce
        return accumulator;
    }, [])
}
const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
console.log(extractValue(arr,'name'));

/*
Write a function called vowelCount which accepts a string and returns an object with the keys 
as the vowel and the values as the number of times the vowel appears in the string. This 
function should be case insensitive so a lowercase letter and uppercase letter should count
vowelCount('Elie') // {e:2,i:1};
vowelCount('Tim') // {i:1};
vowelCount('Matt') // {a:1})
vowelCount('hmmm') // {};
vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str){
    // Note: it does not return an array, rather returns things like string, or object
    //let obj = {};  // this can be substituted by second parameter
    let vowel = "aeiou";
    let arrayFormed = Array.from(str);
    //console.log(arrayFormed); // to check if arrayFormed holds correct data
    return arrayFormed.reduce(function(accumulator, nextValue){
        // hmm, it turns out to be case sensitive, use toLowerCase() method to fix it
        if(vowel.indexOf(nextValue.toLowerCase()) !== -1){
            if(accumulator[nextValue.toLowerCase()]){
                accumulator[nextValue.toLowerCase()] += 1;
            } else {
                accumulator[nextValue.toLowerCase()] = 1;
            }
        }
        return accumulator;
    }, {});
}
console.log(vowelCount('Elie'));
console.log(vowelCount('Tim'));
console.log(vowelCount('Matt'));
console.log(vowelCount('hmmm'));
console.log(vowelCount('I Am awesome and so are you'));

/*
        addKeyAndValue
Write a function called addKeyAndValue which accepts an array of objects and returns the 
array of objects passed to it with each object now including the key and value passed to the 
function.
const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
addKeyAndValue(arr, 'title', 'Instructor') //

[
  {title: 'Instructor', name: 'Elie'},
  {title: 'Instructor', name: 'Tim'},
  {title: 'Instructor', name: 'Matt'},
  {title: 'Instructor', name: 'Colt'}
]
*/
function addKeyAndValue(array, key, value){
    return array.reduce(function(accumulator, nextValue, index){
    // Need to decipher to the accumulator, and to the value it is holding
        let accumulatorVal = accumulator[index];
        //assign key and value to it
        accumulatorVal[key] = value;
        return accumulator;
    //}, []);
    }, arr);
}
const arr1 = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
console.log(addKeyAndValue(arr1, 'title', 'Instructor'));

