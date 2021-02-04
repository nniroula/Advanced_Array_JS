/*
Write a function called findUserByUsername which accepts an array of objects, each with a key 
of username, and a string. The function should return the first object with the key of username 
that matches the string passed to the function. If the object is not found, return undefined.

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/

function findUserByUsername(array, key){
    return array.find(function(val){
        return val.username === key;
    });
}
const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];
  
console.log(findUserByUsername(users, 'mlewis'));
console.log(findUserByUsername(users, 'taco'));

/*
/*
        removeUser
Write a function called removeUser which accepts an array of objects, each with a key of 
username, and a string. The function should remove the object from the array. If the object 
is not found, return undefined.
const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/
function removeUser(array, key){
    let valueObtained = array.findIndex(function(val){
        return val.username === key;
    });
    //console.log(valueObtained);
    if(valueObtained === -1){
        return undefined;
    }
    return array.splice(valueObtained,1)[0];
}
const users1 = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];
console.log(removeUser(users1, 'akagen'));
console.log(removeUser(users1, 'akagen'));
