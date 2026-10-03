//Deep copy using structuredClone() :
let arr1 = [
    {name : "John"},
    {name :  "Jim"}
];
let arr2 = structuredClone(arr1);

arr2[0].name = "Ritha";

console.log(arr1);
console.log(arr2);