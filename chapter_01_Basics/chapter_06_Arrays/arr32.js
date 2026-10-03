//Methods to copy an array : 
//1) spread operator 
let original = [1,2,3];
let copy1 = [...original];
console.log(original);
console.log(copy1);

//2) slice() method
let copy2 = original.slice();
console.log(copy2);

//3) Array.from() method
let copy3 = Array.from(original);
console.log(copy3);