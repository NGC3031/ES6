// ES6 Arrow functions

const num = [1, 2, 3]
const cube = num.map(function (n) {
    return n * n;
});
console.log(cube); //[1,4,9]

//becomes this which is lambda notation - think f(n)=n^2
// indentifier => expression
const cube2 = num.map(n => n * n);
console.log(cube2);

const rectangleArea = (l, w) => l * w; //f(a,b)=ab
console.log(rectangleArea(3, 4));

// NB arrow fns do not bing their own values of this