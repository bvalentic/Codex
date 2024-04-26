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
}

// Create a new deck
const myDeck = new Deck();

// Shuffle the cards
myDeck.shuffle();

// Draw a card
const topCard = myDeck.draw();
console.log("You drew: " + topCard.getDescription());

// Show remaining cards (optional)
console.log(myDeck.cards); 
