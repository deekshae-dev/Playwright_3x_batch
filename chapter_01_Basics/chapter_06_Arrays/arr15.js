//iterating an array using simlpe for loop :
let shapes = ["circle", "triangle", "rectangle", "square"];

for (let i = 0; i < shapes.length; i++) {
    console.log(shapes[i]);
}

console.log("***************");

//iterating an array using for...of loop :
for (let shape of shapes) {
    console.log(shape);
}