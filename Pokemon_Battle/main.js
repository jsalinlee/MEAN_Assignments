var game = {
  players: [],
  addPlayer: function(player){
      this.players.push(player);
  }
};
function playerConstructor(name){
  player = {};
  player.card = []
  player.name = name;
  player.hand = [];
  player.addCard = function(card){
      $.getJSON("http://pokeapi.co/api/v2/pokemon/1/", function(object) {
          card = object;
          player.hand.push(card);
      })
  };
  return player;
};

player1 = new playerConstructor("Jonathan");
game.addPlayer(player1);
console.log(game.players);
player1.addCard()
console.log(player1.hand)
