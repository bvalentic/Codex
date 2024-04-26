class PlayingCard {
    constructor(suit, rank) {
      this.suit = suit;
      this.rank = rank;
    }
  
    // Method to get a descriptive string representation of the card
    getDescription() {
      return `${this.rank} of ${this.suit}`;
    }
}

class Deck {
    constructor() {
      this.cards = [];
  
      const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
      const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
  
      for (const suit of suits) {
        for (const rank of ranks) {
          this.cards.push(new PlayingCard(suit, rank));
        }
      }
    }
  
    shuffle() {
      // Using Fisher-Yates Shuffle for efficiency
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
  
    draw() {
      return this.cards.pop(); // Remove and return the top card
    }
}

const deck = new Deck();
console.log(deck.cards.length); // Initially 52

deck.shuffle();

const topCard = deck.draw();
console.log(topCard.getDescription()); // Example: "Queen of Clubs"
