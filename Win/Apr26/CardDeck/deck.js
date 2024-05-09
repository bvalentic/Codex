// import 'PlayingCard';

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

	drawCard(card) {
		this.hand.push(card);
	}

	get handSize() {
		return this.hand.length;
	}

	toString() {
		return `${this.name}'s hand: ${this.hand.map(card => card.getDescription()).join(', ')}`;
	}
}

class PlayingCard {
	constructor(suit, rank) {
		this.suit = suit;
		this.rank = rank;
	}
	
	// Method for user-friendly card description
	getDescription() {
		return `${this.rank} of ${this.suit}`;
	}
}

class Deck {
	constructor() {
		this.suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
		this.ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
		this.cards = this.createDeck();
		this.cardsRemaining = this.cards.length;
		this.hands = [];
		}
  
	// Creates the full deck of 52 cards
	createDeck() {
		const deck = []; 
		for (const suit of this.suits) {
			for (const rank of this.ranks) {
			deck.push(new PlayingCard(suit, rank));
			}
		}
		return deck;
	}
  
	// Implements the Fisher-Yates Shuffle algorithm
	shuffle() {
		for (let i = this.cards.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
		}
	}
  
	// Draws the top-most card
	draw() {
	 	return this.cards.pop();
	}

    // Deals cards to players
	deal(players, cardsPerPlayer) {
		if (players.length * cardsPerPlayer > this.size) {
		  	throw new Error("Not enough cards in the deck");
		}
	
		for (let i = 0; i < cardsPerPlayer; i++) {
			for (let player of players) {
				player.drawCard(this.draw());
			}
		}
	}
}

class TarotDeck extends Deck {
    constructor() {
        super();
        this.cards = [];
        let suits = ["Wands", "Cups", "Swords", "Pentacles"];
        let minorArcanaRanks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Page", "Knight", "Queen", "King"];
    
        for (let suit of suits) {
            for (let rank of minorArcanaRanks) {
                this.cards.push(new PlayingCard(suit, rank));
            }
        }
    
        let majorArcanaRanks = [
            "The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor",
            "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit",
            "Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance",
            "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgement",
            "The World"
        ];
    
        for (let rank of majorArcanaRanks) {
            this.cards.push(new PlayingCard("Major Arcana", rank));
        }
    }
}

export default Deck;

let deck = new Deck();
deck.shuffle();

let player1 = new Player("Alice");
let player2 = new Player("Bob");

deck.deal([player1, player2], 5);

console.log(player1.toString()); // Outputs: Alice's hand: 8 of Hearts, King of Diamonds, 3 of Clubs, 10 of Spades, 7 of Hearts
console.log(player2.toString()); // Outputs: Bob's hand: Ace of Spades, 4 of Clubs, 9 of Diamonds, 6 of Clubs, Jack of Spades

let tarotDeck = new TarotDeck();
tarotDeck.shuffle();
console.log(tarotDeck.draw().getDescription()); // Outputs a random tarot card
