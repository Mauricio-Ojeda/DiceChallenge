throwDice = document.querySelector('#reload');
// throw dice
throwDice.addEventListener('click', () => {
const title = document.querySelector('h1'),
    diceImg = document.querySelectorAll('img');

let randomNumberPlayer1 = Math.floor(Math.random() * 6) + 1;
let randomNumberPlayer2 = Math.floor(Math.random() * 6) + 1;


// dice image to player 1
diceImg[0].setAttribute("src", "images/dice" + randomNumberPlayer1 + ".png");

//dice image to player 2
diceImg[1].setAttribute("src", "images/dice" + randomNumberPlayer2 + ".png");

// search winner
let winner = (randomNumberPlayer1 > randomNumberPlayer2) ? "🏆Player 1 Wins!" :
    (randomNumberPlayer1 < randomNumberPlayer2) ? "🏆Player 2 Wins!" : "🎈Draw!"

// show winner in title
title.innerText = winner;
})
