// Guess a number between 1 and 100.

// The program will generate a secret number which will be hidden. 
// Players need to guess the number by typing the number into a box (input element).

// Initial score is 0. High Score is 0.

// 1. When there is no input, and user press check button, 
// there is message showing no input.

// 2. When user put a wrong number, and user press check button, 
// message shows it is too low or too high. There is a score starting from 
// 10 and will be decreasing by 1 every time when user guessing a wrong number.

// 3. When user put a correct number, background color changes, the 
// secret number shows, background with of secret number changes, and 
// high score will be updated or remained the same.

// Implement a game rest functionality, so that the player can make a new guess!

// 1. Select the element with the 'Play' class and attach a click event handler

// 2. In the handler function, restore initial values of the 'score' 
// and 'secretNumber' variables


// 3. When user put a correct number, background color changes, the 
// secret number shows, background with of secret number changes, and 
// high score will be updated or remained the same.

// Implement a game rest functionality, so that the player can make a new guess!

// 1. Select the element with the 'Play' class and attach a click event handler

// 2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables

// 3. Restore the initial conditions of the message, number, score and guess input fields

// 4. Also restore the original background color and number background width 

//  Project 3

//  Project 3



// console.log(guess);
// console.log(typeof NaN);
/*let tries = 1;
while (tries <= 10) {
    let guess = Number(prompt('Enter Guess:'));
    if (isNaN(guess)) {
        console.log('Please enter a number');
    } else if (guess < 1 || guess > 100) {
        console.log('Please enter number in range');
    } else if (guess === secretNumber) {
        // console.log(guess);
        console.log('You won the game!');
        highScore = score;
        console.log(`High score: ${highScore}`);
        console.log(`Score: ${score}`);
        break;
    } else if (guess > secretNumber) {
        // console.log(guess);
        console.log('Too high!');
        score = score - 1;
        highScore = score;
        console.log(`High score: ${highScore}`);
        console.log(`Score: ${score}`);
    } else {
        // console.log(guess);
        console.log('Too low')
        score = score - 1;
        highScore = score;
        console.log(`High score: ${highScore}`);
        console.log(`Score: ${score}`);
    };
    tries++;
}*/
//let name = window.prompt("Enter your name: ");
//alert(`Your name is ${name}`);

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 10;
let highScore = 0;
const guesses = document.querySelectorAll("play_button");
document.querySelectorAll('play_button').addEventListener('click', function(){
    let tries = 1;
    while (tries <= 10) {
        let guess = Number(prompt('Enter Guess:'));
        if (isNaN(guess)) {
            console.log('Please enter a number');
        } else if (guess < 1 || guess > 100) {
            console.log('Please enter number in range');
        } else if (guess === secretNumber) {
            // console.log(guess);
            console.log('You won the game!');
            highScore = score;
            console.log(`High score: ${highScore}`);
            console.log(`Score: ${score}`);
            break;
        } else if (guess > secretNumber) {
            // console.log(guess);
            console.log('Too high!');
            score = score - 1;
            highScore = score;
            console.log(`High score: ${highScore}`);
            console.log(`Score: ${score}`);
        } else {
            // console.log(guess);
            console.log('Too low')
            score = score - 1;
            highScore = score;
            console.log(`High score: ${highScore}`);
            console.log(`Score: ${score}`);
        };
        tries++;
};