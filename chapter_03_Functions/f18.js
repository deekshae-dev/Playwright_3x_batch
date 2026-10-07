//single return 
function getStatusCode(code) {
    if(code >= 200 && code < 300) return "Success";
    if(code >= 400 && code < 500) return "Client Error";
    if(code >= 500 && code < 600) return "Server Error";
}

console.log(getStatusCode(200)); 
console.log(getStatusCode(404));
console.log(getStatusCode(500));


//Function which does not return anything
function logTest(name) {
    console.log(`Running: ${name}`);
}