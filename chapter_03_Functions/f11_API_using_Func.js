function  validateStatusCode(status) {
    if (status >= 200 && status <= 300) {
        return true;
    }
console.log("Success");
    }
    return false;
    console.log("Failure");