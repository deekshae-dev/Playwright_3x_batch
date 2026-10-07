let score1 = 85;
let score2 = 45;

function getResult(score) {
    return score > 70 ? "PASS" : "FAIL";
}

getResult(score1);
getResult(score2);

console.log(getResult(score1));
console.log(getResult(score2));