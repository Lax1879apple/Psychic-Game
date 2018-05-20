
var lettersArray = ["a", "b" ,"c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "z"];
var lettersGuessedArray = [];
var letterToGuess = null;

var guessesRemaining = 10;
var wins = 0;
var losses = 0;

window.onload = function() {
    var index = Math.floor(Math.random() * lettersArray.length);
    letterToGuess = lettersArray[index];
  }
  
document.onkeyup = function(event) {
                 
    var letter = event.key;
    $("#guesses-so-far").append(letter + ", ");
    
    if(lettersArray.includes(letter)){

        if(letter == letterToGuess){
            wins = wins + 1;
            guessesRemaining = 10;
            document.getElementById("wins").innerHTML = wins;
            document.getElementById("guesses-remaining").innerHTML = guessesRemaining;

            index = Math.floor(Math.random() * lettersArray.length);
            letterToGuess = lettersArray[index];
            document.getElementById("guesses-so-far").innerHTML = ""
            console.log("Letter to be guessed " +  letterToGuess);
        }else{
            guessesRemaining = guessesRemaining - 1;
            document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
            if(guessesRemaining == 0){                
                losses = losses + 1;
                document.getElementById("losses").innerHTML = losses;
                guessesRemaining = 10;  
                document.getElementById("guesses-remaining").innerHTML = guessesRemaining; 
                document.getElementById("guesses-so-far").innerHTML = ""            
            }            
        }
    }


/*
var selectLetter = function(){
    letterToGuess = lettersArray[Math.floor(Math.random() * lettersArray.length)];
    console.log (letterToGuess);

}
var updateGuessesSoFar = function(){
    document.getElementById("guesses-so-far").innerHTML = lettersGuessedArray;
};
var updateGuessesLeft = function(){
    guessesRemaining--;    
    document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
};

var resetFunction = function(){
    guessesRemaining = 10;
    lettersGuessedArray = [];
    updateGuessesLeft();
    selectLetter();
    updateGuessesSoFar();
};*/
    /*
    var letterCode = event.keyCode;
   lettersGuessedArray.push(letter);
   updateGuessesLeft();
   updateGuessesSoFar();*/

};