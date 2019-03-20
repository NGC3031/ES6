//Array destructuring

//instead of 
//let x = 1;
//let y = 2;
//have some syntactic sugar
let [x, y] = [1, 2];
console.log(x);
//actually this is really good for you also
//instead of:
var temp = 4;
x = y;
y = temp;
//save the namespace et' voila
[x, y] = [1, 2];
console.log(x);
[x, y] = [y, x];
console.log(`This is the new ${x}`);
//neat!!
// notice the template literal