//Global variables
const SUITS = ['♠','♥','♣','♦']
const VALUES = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']


//deck made of cards
export default class Deck {
    constructor(cards = freshDeck()){
        this.cards = cards
    }
}
//makes cards with suits and values
class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }
}
//creates an array comprised of cards from all suits and values
function freshDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
}





