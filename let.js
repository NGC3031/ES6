// ES6 let allows block style scope to stop tards messing up scope

var x = 10;

if (x == 10) {
    x = 3;
    var y = 5;
    let z = 2;
}

console.log(x);
console.log(y);
//console.log(z); //gives z not defined error since z's scope is confined 
//not that the if/for etc dont give local scope anyway since scope in
//javascript is function local scope. x=3 works as you expect for a global

//some block with let and curly bracket magic
{
    let a = 6;
}

//console.log(a); //gives a is not defined error