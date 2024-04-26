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

export default PlayingCard
