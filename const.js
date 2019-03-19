//const - sort of what it says on the box

const pi = 3.14;

// lets round it off to save complicated arithmetic
// pi = 4; //gives type error - assignment to a constant variable - as it should
console.log(pi);

//they are also block scoped like let

{
    const e = 2.718;
}

//console.log(e); // e is not defined
//NB: Technically const is not immutable but the identifier cannot be reassigned