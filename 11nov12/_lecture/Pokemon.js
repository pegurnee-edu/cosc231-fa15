var Pokemon = function(nickname) {
  this.name = nickname;
};

Pokemon.prototype.struggle = function() {
  throw "Out of PP";
};

var Bulbasaur = function(nickname) {
  Pokemon.call(this, nickname);
};

Bulbasaur.prototype = Object.create(Pokemon.prototype);

Bulbasaur.prototype.vineWhip = function() {
  console.log("Murder the water types!");
};
