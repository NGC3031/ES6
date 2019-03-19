// Rest parameters - an array of parameters

function wisdomWords(person, ...quotes) {
    console.log(Array.isArray(quotes)); //true       
    console.log(`In ${person} voice, I say ${quotes}`)
}
wisdomWords("Bugs Bunny", "I wonder what the poor bunnies are doing this season?", "\tOh, well, we almost had a romantic ending! ", "\tMy, I'll bet you monsters lead innnnteresting lives.");