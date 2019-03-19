// takes an array and splits it into variables
function sum(a, b, c) {
    return a + b + c
}
var numbers = [1, 2, 3]
//ES5 olden days way of doing it     
console.log(sum.apply(null, numbers));
//ES6 modern way until it is not modern     
console.log(sum(...numbers))