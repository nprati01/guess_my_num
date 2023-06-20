//define the secret number
const secretNumber = Math.trunc(Math.random() * 40) + 1 ;
document.querySelector('.number').textContent = secretNumber


//add event listener is a special kind of function that expects an event handler
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    //game logic
    //if there is no input
    if(!guess) {
        document.querySelector('.message').textContent = '🚫 You need to enter a number';

    } else if( guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 You guess correctly!';

    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = '📈 Too high!'
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = '📉 Too Low!'

    }
});
