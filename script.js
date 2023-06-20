//DEFINE STATE VARIABLES

//define the secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//define the score
let score = 20;
// define highscore
let highscore = 0

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};


//add event listener is a special kind of function that expects an event handler
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);




    //game logic
    //if there is no input
    if (!guess) {
        displayMessage('🚫 You need to enter a number');
    } else if ( guess === secretNumber) {
        displayMessage('🎉 You guessed correctly!');
        document.querySelector('.number').textContent = secretNumber

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore
        }
    } else if ( guess !== secretNumber) {
        if (score > 1) {
           displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💥You Lost the Game!');
            document.querySelector('.score').textContent = 0;
        }
    }
})




document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random * 20) + 1;
    displayMessage('Start guessing....');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
 });
