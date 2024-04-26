// import 'PlayingCard';

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
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
    deal(numPlayers, numCardsPerPlayer) {
        const players = []; // Store each player's hand

        // Ensure the deck has enough cards
        if (numPlayers * numCardsPerPlayer > this.cards.length) {
            throw new Error("Not enough cards in the deck to deal.");
        }

        for (let i = 0; i < numPlayers; i++) {
            const player = new Player(`Player ${i + 1}`);
            const playerHand = [];
            for (let j = 0; j < numCardsPerPlayer; j++) {
                playerHand.push(this.draw()); 
            }
            player.hand = playerHand;
            players.push(player);
        }
        
        return players; // Return array of Player objects
    }
}

export default Deck;

// // Create a new deck
const myDeck = new Deck();

// // Shuffle the cards
myDeck.shuffle();

// // Draw a card
// const topCard = myDeck.draw();
// console.log("You drew: " + topCard.getDescription());

// // Show remaining cards (optional)
// console.log(myDeck.cards); 

// Deal 5 cards to 4 players
// const hands = myDeck.deal(4, 5);  
// console.log(hands)
// console.log(hands[0])

// Get the hand of the first player
const players = myDeck.deal(4, 5);
const player1Hand = players[0].hand;
console.log("Player 1's Hand:", player1Hand); 
