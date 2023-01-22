const getRandomNumber = ()=>{
    let number = Math.floor(Math.random() * 13) + 1;
    if(number > 10){
        return 10;
    }else if (number === 1){
        return 11;
    }else{
        return number;
    }
}

const messageBox = document.getElementById("messageBox");
const cardsElement = document.getElementById("cards");
const sumElement = document.getElementById("sum");
const triggerButton = document.getElementById("triggerButton");
const addCardButton = document.getElementById("addCardButton");
const totalWinsValue = document.getElementById("totalWins");
let firstCard = getRandomNumber();
let secondCard = getRandomNumber();
let sum = firstCard + secondCard;
let message = "";
let cards = [firstCard,secondCard];
let isAlive = false;
let totalWins = 0;

const resetGame = ()=>{
    let firstCard = getRandomNumber();
    let secondCard = getRandomNumber();
    cards = [firstCard,secondCard];
    sum = firstCard + secondCard;
    triggerButton.innerHTML = "Reset Game";
}

const renderGame = ()=>{
    cardsElement.textContent = "Cards: " + cards.map((card)=>card).join(" "); 
    sumElement.textContent = `Sum: ${sum}`;

    if(sum > 21){
        isAlive = false;
        message = "Game over!";
        resetGame();
    }else if(sum === 21){
        isAlive = false;
        message = "You win the game";
        totalWins += 1;
        totalWinsValue.textContent = "Wins: " + totalWins;
        resetGame();
    }else{
        message = "Do you want to draw a new card?"
    }
    return messageBox.textContent = message;
}

const startGame = ()=>{
    isAlive = true;
    renderGame();
}

const addCard = ()=>{
    if(isAlive){
        let card = getRandomNumber();
        sum += card;
        cards.push(card);
        renderGame();
    }
}