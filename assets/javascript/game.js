var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; // Array of potential guess characters
var numGuess = 15; // Number of guesses
var userGuessed = []; // Letters user guessed
var loseCounter = [0]; // How many times you've lost
var winCounter = [0]; // How many times you've won


loseCounter = parseInt(loseCounter);
winCounter = parseInt(winCounter);



// Randomizes the global alphabet bank
function randomizer(alphabet) {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

var computerGuess = randomizer(alphabet);

// Function that initiallizes randomize alphabet bank and true/false.
document.onkeyup = function(event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    // Brute force method instead of for loop (works, but less elegant):
    // if (userGuess=== 'a'||userGuess==='b'||userGuess==='c'||userGuess==='d'||userGuess==='e'||userGuess==='f'||userGuess==='g'||userGuess==='h'||
    // userGuess==='i'||userGuess==='j'||userGuess==='k'||userGuess==='l'||userGuess==='m'||userGuess==='n'||userGuess==='o'||userGuess==='p'||
    // userGuess==='q'||userGuess==='r'||userGuess==='s'||userGuess==='t'||userGuess==='u'||userGuess==='v'||userGuess==='w'||userGuess==='x'||
    // userGuess==='y'||userGuess==='z') {
    for (i = 0; i < alphabet.length; i++) {
        if (userGuess === alphabet[i]) {

            if (userGuess == computerGuess) {
                console.log("correct", userGuessed);
                winCounter++;
                document.getElementById("winCounter").innerHTML = (winCounter);
                userGuessed.push(userGuess);
                document.getElementById("userGuessed").innerHTML = (userGuessed);
                reset.resetGame();
                alert("You win!");

                // document.getElementById("userGuessed").innerHTML=(userGuessed.length);

            } else {
                console.log("no", numGuess, userGuessed);
                console.log(loseCounter)
                console.log(loseCounter)
                userGuessed.push(userGuess);
                document.getElementById("userGuessed").innerHTML = (userGuessed);
                numGuess--;
                // (loseCounter+=1);
                document.getElementById("numGuess").innerHTML = (numGuess);
                // document.getElementById("userGuessed").innerHTML=(userGuessed.indexOf);

            }
            if (numGuess === 0) {
                // reset.resetGame()
                loseCounter++;
                document.getElementById("loseCounter").innerHTML = (loseCounter);
                reset.resetGame();
                alert("You lose!");

            }
        };
    }
}


var reset = {
    resetGame: function() {
        numGuess = 15;
        document.getElementById("numGuess").innerHTML = (numGuess);
        userGuessed = [];
        document.getElementById("userGuessed").innerHTML = (userGuessed);
        computerGuess = randomizer(alphabet);
    }
}