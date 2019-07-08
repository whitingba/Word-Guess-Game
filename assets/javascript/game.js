//variables as an object
let wordGame = {
    //Word bank of possible answers
    wordBank: ["zebra", "elephant", "giraffe", "gorilla", "rhinoceros"],
    //random word is chosen for user to guess
    randomWord: "",
    //wins counter set to zero at start of game
    winsCounter: 0,
    //set max guesses user can guess to 12
    maxGuesses: 12,
    //guessesRemaining will be the counter that is seen on the screen and is set to the maxGuesses
    guessesRemaining: "",
    //array that the user guesses will go into
    guessArray: [],




    startGame: function () {
        this.guessesRemaining = this.maxGuesses;
        //clear guess array
        this.guessArray = [];
        //randonWord needs to be chosen
        this.setRandomWord();
    },



    setRandomWord: function () {
        //select random word from the wordBank
        this.randomWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
    },

    handleKeyPress: function (key) {

    },

    storeUserGuess: function () {
        //store user guess to the array
        //display user guess to the letters guessed field
    },

    compareGuess: function () {
        //compare user guess to random word 
        //and add conditionals based on correct answers 
        //display correct guesses to current word field
        //else...
    },

    winGame: function () {
        //conditionals as what would happen if the word is guessed and game is won
        //wins increase by one
        //picture of the word guess is displayed on screen
        //game starts again
    },

    endOfGame: function () {
        //what happens when the game counter reaches 0 before the word is guessed
        //display the word on the screen
        //guesses remaining resets back to maximum
        //guess array is cleared
        //new random word is created
    },





};

wordGame.startGame();

console.log(wordGame.randomWord)

document.onkeyup = function (event) {
    wordGame.handleKeyPress(event.key);
};

//document.getElementById("numOfGuesses").innerHTML = wordGame.maxGuesses;




//At start of game my remaining guesses is set to 12





//Create a function upon user pressing their first key
// document.onkeyup = function (event) {


    // Determine which key was pressed.
    // var userGuess = event.key;

    //Only allow the user to select letters a thru z, no otheres
    // if (userGuess.charCodeAt(0) >= 97 && userGuess.charCodeAt(0) <= 122) {

        //Add the user keypress to the guessArray
        // guessArray.push(userGuess);

        //display the user keypress to the screen
        // document.getElementById("guesses").innerHTML = guessArray.join(' ');

        //guess counter reduces by one

        //guesses remaining is displayed to the screen 

        //user guess is compared to the letters in the word






//     };


// };




