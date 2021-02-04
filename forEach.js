
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

