let random_num = Math.trunc(Math.random() * 100) + 1;
const guess_num = document.getElementById('user_guess');
const guess_check = document.getElementById('score_check');

guess_num.addEventListener('click', function(){
    let guess = Number(document.getElementById('guess_bar').value);
    if (guess == random_num){
        guess_check.innerHTML = "equal";
    } else if(guess > random_num){
        guess_check.innerHTML = "guess to high";
    } else if (guess < random_num){
        guess_check.innerHTML = "guess to low";
    }else{
        guess_check.innerHTML = "enter a valid number"
    }
})


// let secretNumber = 60; //Math.trunc(Math.random() * 100) + 1;

// const enterGuess = document.querySelector('.enterGuess'); //button
// const guessBox = document.querySelector('.guessBox'); //textbox
// const message = document.querySelector('.instruct');
// const reset = document.querySelector('.reset');
// let score = 10;
// let highScore = 0;

// enterGuess.addEventListener('click', check);

// function check() {

//     let guess = Number(guessBox.value); //user guess

//     if (score === 1) {
//         message.textContent = 'Game Over.';
//         document.querySelector('.mysteryBox').textContent = `${secretNumber}`;
//         enterGuess.style.display = 'none';
//         document.querySelector('body').style.background = `linear-gradient(to top right, #300909, #db0303)`;
//     }
//     else if (isNaN(guess)) {
//         message.textContent = 'Please only enter a number';
//     }
//     else if (guess < 1 || guess > 100) {
//         message.textContent = 'Please enter a number between 1 and 100';
//     }
//     else if (guess === secretNumber) {
//         message.textContent = 'You won the game!';
//         document.querySelector('body').style.background = 'linear-gradient(to top right, #2b7cf7, #47e777)';
//         enterGuess.style.display = 'none';
//         document.querySelector('.mysteryBox').textContent = `${secretNumber}`;
//         if (score >= highScore) { highScore = score; };
//         document.querySelector('.highScore').textContent = `Highscore: ${highScore}`;

//     }
//     else if (guess > secretNumber) {
//         message.textContent = 'Too high!';

//     }
//     else {
//         message.textContent = 'Too low';

//     }

//     if (guess !== secretNumber) {
//         score--;
//     };

//     document.querySelector('.score').textContent = `Score: ${score}`;
// };

// reset.addEventListener('click', playAgain);

// function playAgain() {
//     score = 10;

// }
