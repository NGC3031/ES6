//Tagged Template literals

function tag(strings, ...substitutes) {
    console.log(strings[0]);
    console.log(substitutes[2]);
}
var firstName = "Peter";
var lastName = "Parker";
var otherName = "Spidey";
tag `Hey there! It\'s you, ${firstName}, ${lastName}, ${otherName}`;