//Without return type it gives undefined because the function
//  does not return any value. 
// The console.log inside the function 
// will print the sum of a and b, 
// but when we try to log the result of the function call, 
// it will show undefined since there is no return statement.
function add(a,b) {
    console.log(a + b);
}

let result = add(10,20);
console.log(result);