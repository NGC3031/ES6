const N = 50;
let unsortedArray = [];

//create array of numbers for testing
//unsorted
for (let i = 0; i < N; i++) {
    unsortedArray[i] = Math.floor(Math.random() * N);
}

//copy array using spread operator
const unsortedArray2 = [...unsortedArray];
// show the new array
console.log(unsortedArray.toString());
console.log(unsortedArray2.toString());