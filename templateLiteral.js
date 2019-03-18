//Template literals - old way
var log_level = "debug";
var log_message = "meltdown";
console.log("Log level: " + log_level + " - message : " + log_message);

//using template literals with ${} and ``
var a = 10;
var b = 10;
console.log(`Sum is ${a + b} and Multiplication would be ${a * b}.`);

console.log(`This is line one \nand this is line two`);

var a = 10;
var b = 10;

function sum(x, y) {
    return x + y
}

function multi(x, y) {
    return x * y
}
console.log(`The Sum is ${sum(a,b)} and Multiplication would be ${multi(a,b)}.`);