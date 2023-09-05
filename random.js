function findLargest (nr1, nr2, nr3, nr4) {
    return Math.max(nr1, nr2, nr3, nr4);
}

const largest = findLargest(3, 2, 10, 10.3);
console.log("largest is:", largest);


function range(numberToCheck, range1, range2) {
if (numberToCheck >= range1 && numberToCheck <= range2) {
    return true
} else {
    return false
}
}

const inTheRange = range(8, 7,10)
console.log("inTheRange is:", inTheRange);


// exercise higher or lower 
document.querySelector("button").addEventListener("click", higherOrLower);

let counter = 0;

function higherOrLower () {
    
    let randomNr = Math.floor(Math.random() * 100) + 1;
    console.log("randomNr:", randomNr);
    let userGuess = document.querySelector("input").value;
    let resultElement = document.querySelector("#result"); 
    counter++;
    console.log("counter:", counter);


    if (userGuess == randomNr) {
    resultElement.innerHTML = `You guessed right! it took you ${counter} tries!`
} else if (userGuess > randomNr) {
    resultElement.innerHTML = "You guessed too high! Try again!"
} else if (userGuess < randomNr) {
    resultElement.innerHTML = "You guessed too low! Try again!"
}

}


