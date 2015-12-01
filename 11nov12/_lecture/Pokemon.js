var Pokemon = function(nickname, type) {
  this.name = nickname;
  this.type = type;
};

Pokemon.prototype.struggle = function() {
  throw "Out of PP";
};


for(;;) {
	try {
		//do pokemon battle stuff
		myBulba.struggle();
	} catch (x) {
		
	}
}
var Bulbasaur = function(nickname) {
  Pokemon.call(this, nickname, "grass/poison");
  //Bulbasaur.prototype === Object.prototype
  Bulbasaur.struggle.call();
};

Bulbasaur.prototype = Object.create(Pokemon.prototype);

Bulbasaur.prototype.vineWhip = function() {
  console.log("Murder the water types!");
};

Bulbasaur.prototype.struggle = function() {
	console.log("Go bulba!");
}

var myBulba = new Bulbasaur("Mittens");

myBulba.struggle = function() {
	throw this;
}

myBulba.isPrototypeOf(Pokemon);




