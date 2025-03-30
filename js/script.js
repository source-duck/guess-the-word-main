
// At the end of this step, you’ll have selected all the HTML elements you’ll need to target using querySelector(). Hint: Add comments above each element you select to help you remember what you’re targeting!

// You’ll also program placeholders to represent each letter in the word and add an event listener for the Guess button. Letters guessed by the player won’t appear on the screen yet, but you’ll be able to check the input is working with the console.

// 3. Create global variables to select the following elements:
// 	a. The unordered list where the player’s guessed letters will appear.
const guessedLettersElement = document.querySelector(".guessed-letters");
//b. The button with the text “Guess!” in it.
const guessLetterButton = document.querySelector(".guess");
//c. The text input where the player will guess a letter.
const letterInput = document.querySelector(".letter");
//d. The empty paragraph where the word in progress will appear.
const wordInProgress = document.querySelector(".word-in-progress");
//e. The paragraph where the remaining guesses will display.
const remainingGuessesElement = document.querySelector(".remaining");
//f. The span inside the paragraph where the remaining guesses will display.
const remainingGuessesSpan = document.querySelector(".remaining span");
//g. The empty paragraph where messages will appear when the player guesses a letter.
const message = document.querySelector(".message");
//h. The hidden button that will appear prompting the player to play again.
const playAgainButton = document.querySelector(".play-again");
//4. Create another global variable called word and give it the value of "magnolia". Magnolia is your starting word to test out the game until you fetch words from a hosted file in a later step.
const word = "magnolia";

// Write a Function to Add Placeholders for Each Letter

// 1. Create and name a function to update the paragraph’s innerText for the “words-in-progress” element with circle symbols (●) to represent each letter in the word. The symbols will stay on the screen until the correct letter is guessed (in a future step). Hint: Copy and paste the ● symbol into your code!

// 2. Call the function and pass it the word variable as the argument. You should see 8 circle symbols on the screen, one for each letter in the word “magnolia.” Hint: You’ll need to use an array and then join it back to a string using the .join("") method.
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

// Add an Event Listener for the Button

// 1. Add an event listener for when a player clicks the Guess button. In the callback function, add a parameter for the event: e.
// 2. Because you’re working with a form, you want to prevent the default behavior of clicking a button, the form submitting, and then reloading the page. To prevent this reloading behavior, add this line of code at the top of the callback function: e.preventDefault();.
// 3. Create and name a variable to capture the value of the input. Log out the value of the variable capturing the input. Then, empty the value of the input. You should see the letter you enter into the input field in the console when the Guess button is clicked.
// 4. In the command line, add and commit your changes. Push the changes up to GitHub. Copy the link to your repo and submit it below. Part 1 of the project is done! 😀

// Note will only see your gussed letters by *Inpecting the "Console Logout" at this point.
guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = letterInput.value;
    // Note will only see your gussed letters by *Inpecting the "Console Logout" at this point.
    console.log(guess);
    letterInput.value = "";
});