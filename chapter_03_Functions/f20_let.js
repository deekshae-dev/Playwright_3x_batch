// let
let b = 24;
console.log(b);

function printHello() {
    console.log("Hello");
    let b = 30;
    console.log(b);
    if(true) {
        let b = 10;
        console.log(b);
    }
    console.log("let ->" , b);
}
printHello();
