function Rectangle(sides) {
	this.sides = sides;
	this.numSides = sides.length;
	
	var sum = 0;
	for ( x of sides ) {
		sum += x;
	}
	
	this.perimeter = sum;
	
// 	side at length side at zero or use an array;
}

Rectangle.prototype.area = function() {
	return this.sides[0] * this.sides[1];
}

Rectangle.prototype.draw = function(cell) {
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	ctx.fillStyle = cell.alive ? "green" : "white";
	ctx.fillRect(10, 10, 50 * this.sides[0], 50 * this.sides[1]);
}









