function add(a,b,c) {
    return a + b + c;
}

let num = [1,2,3];
add(...num); 
// spread operator is used to pass the array elements as 
// individual arguments to the function.)