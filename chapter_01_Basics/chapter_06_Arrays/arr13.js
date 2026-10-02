let results = ["pass","fail","error","fail"];

//indexOf() : 
console.log(results.indexOf("fail")); 
console.log(results.indexOf("passing"));

//lastIndexOf() :
console.log(results.lastIndexOf("error"));

console.log(results.includes("fail"));
console.log(results.includes("passing")); 

//find() :
let nums = [1,2,3,4,5];
let res = nums.find(x => x >3);
console.log(res);