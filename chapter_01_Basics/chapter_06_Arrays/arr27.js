//toSorted() method doesnt modify the original array and returns a new sorted array
const num = [10, 2, 3, 4, 13, 23];
const result = num.toSorted((a,b) => a -b);
console.log(num);
console.log(result);