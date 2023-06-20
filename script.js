//DEFINE STATE VARIABLES

//define the secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;


//define the score
let score = 20;


//add event listener is a special kind of function that expects an event handler
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);




    //game logic
    //if there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '🚫 You need to enter a number';
    } else if ( guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 You guessed correctly!';
        document.querySelector('.number').textContent = secretNumber
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too high!'
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message'). textContent = '💥You Lost the Game!';
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message'). textContent = '💥You Lost the Game!';
            document.querySelector('.score').textContent = 0;
        }
    }
});



document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing....';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
 });
