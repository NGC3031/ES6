// Functions in ES6 can take default values - useful for when you screw up
// also useful just to provide a standard default
function greet(firstName = 'NA', petName = 'NA') {
    console.log(`Hello: ${firstName}, your pet's name is: ${petName}`)
}
greet('Batman'); //without a pet name the default is used

greet('Dr Who', 'K9');