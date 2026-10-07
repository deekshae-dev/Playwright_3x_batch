//function declaration in arrow function way :
const greet2 = (name2) => `Hello, ${name2}!`;
console.log(greet2("ABC"));

//multiple parameters
const getRes = (score) => {
    if (score > 80) return " Pass ";
    return " Fail ";
}

console.log(getRes(85));
console.log(getRes(75));