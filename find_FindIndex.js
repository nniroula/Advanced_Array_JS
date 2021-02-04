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

