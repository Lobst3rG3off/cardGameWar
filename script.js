import Deck from "./deck.js";

const playerCardSlot = document.querySelector('.playerCardSlot')
const computerCardSlot = document.querySelector('.computerCardSlot')
const computerDeckElement = document.querySelector('.computerDeck')
const playerDeckElement = document.querySelector('.playerDeck')
const text = document.querySelector('.text')

let playerDeck, computerDeck

startGame()
function startGame() {
    const deck = new Deck()
    deck.shuffle()

    const deckMidpoint = Math.ceil(deck.numberOfCards /2)
    playerDeck = new Deck (deck.cards.slice(0, deckMidpoint))
    computerDeck = new Deck (deck.cards.slice(deckMidpoint, deck.numberOfCards))


    cleanBeforeRound()
}


function cleanBeforeRound() {
    computerCardSlot.innerHTML = ''
    playerCardSlot.innerHTML = ''
    text.innerHTML = ''


    updateDeckCount()
}

function updateDeckCount() {
    computerDeckElement.innerText = computerDeck.numberOfCards
    playerDeckElement.innerText = playerDeck.numberOfCards
}


// computerCardSlot.appendChild(deck.cards[0].getHTML())