const users = [
    { name: "priya", age: 21 },
    { name: "sneha", age: 22 }
]

const result = users.map(user => {
    return {
    username : user.name
    };
});
console.log(result);