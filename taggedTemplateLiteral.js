//Tagged Template literals sort of obvious but shows how they work

function tag(strings, ...substitutes) {
    var str0 = strings[0];
    var str1 = strings[1];
    var sub1 = substitutes[0];
    var sub2 = substitutes[1];
    var sub3 = substitutes[2];
    return `${str0}${sub1}${str1}${sub2} ${sub3}`; //Note the space
}
var firstName = "Peter";
var lastName = "Parker";
var otherName = "Spidey";

var output = tag `The real name of ${otherName} is ${firstName} ${lastName}`;

console.log(output);