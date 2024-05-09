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
