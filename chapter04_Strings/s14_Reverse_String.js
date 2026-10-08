//reverse a string : Method 1
let strval = "madame";
let reversed = strval.split("").reverse().join();
console.log(reversed);

//reverse a string : Method 2
let str = "hello";

let rev = "";

for(let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
}
console.log(rev);