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


