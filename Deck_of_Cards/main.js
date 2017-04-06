function removeAt(array, index) {
    for(var i = 0; i < array.length - 1; i++) {
        var temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp
    }
    return array.pop();
}

function Card(suit, value) {
    this.suit = suit;
    this.value = value;
}

function Deck() {
    this.cards = [];
    this.suits = ["Clubs", "Spades", "Diamonds", "Hearts"];
    this.values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    for (var i = 0; i < this.suits.length; i++) {
        for (var j = 0; j < this.values.length; j++) {
            this.cards.push(new Card(this.suits[i], this.values[j]));
        }
    }
}

Deck.prototype.shuffle = function() {
    var i = this.cards.length;
    var j;
    var temp;

    while(i) {
        j = Math.floor(Math.random() * i--);

        temp = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = temp;
    }
}

Deck.prototype.reset = function() {
    this.cards = [];
    for (var i = 0; i < this.suits.length; i++) {
        for (var j = 0; j < this.values.length; j++) {
            this.cards.push(new Card(this.suits[i], this.values[j]));
        }
    }
}

Deck.prototype.deal = function() {
    return removeAt(this.cards, Math.floor(Math.random() * this.cards.length));
}

function Player(name) {
    this.name = name;
    this.hand = [];
}

Player.prototype.draw = function(deck) {
    var draw = deck.deal();
    this.hand.push(draw);
}

Player.prototype.discard = function(handIndex) {
    return removeAt(this.hand, handIndex)
}
var deck = new Deck();
var player = new Player("Jonathan");
deck.shuffle();
deck.reset();
// console.log(deck.cards);
player.draw(deck);
console.log(deck.cards);
console.log(player.hand);
console.log(player.discard(0));
console.log(player.hand);
