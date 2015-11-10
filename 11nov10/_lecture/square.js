var Square = Object.create(Rectangle.prototype);

// Square.prototype._construct = 

Square.prototype.area = function() {
	return Math.pow(this.sides[0], 2);
}

Square.prototype.numSides = 4;

