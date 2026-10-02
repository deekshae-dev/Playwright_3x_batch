//findIndex() :
let users = [
    { name : "priya", age : 21 },
    { name : "sneha", age : 22 },
    {name :"riyanshi", age : 23 }
];
console.log(users.findIndex(user => user.age === 22));
console.log(users.findIndex(user => user.name === "riyanshi"));
console.log(users.findIndex(user => user.age === 20));

//findLast() :
let users1 = [
    {name : "A", age : 22},
    {name : "B", age : 21},
    {name : "C", age : 22},
    {name : "D", age : 29},
];

console.log(users1.findLast(user2 => user2.age === 22));

//findLastIndex() :
let num = [1, 2, 3, 4, 5, 2];
console.log(num.findLastIndex(num1 => num1 === 2));