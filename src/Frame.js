function Frame() {
	this.rolls = [];
};

Frame.prototype.addRoll = function(roll) {
	if(this.rolls.length >= 2) throw("This frame already has two rolls");
	this.rolls.push(roll);		
};

Frame.prototype.score = function() {
	var total = 0;
	for(var i = 0; i < this.rolls.length; i++) {
		total = total + this._selectRoll(i).score();
	};
	return total;
};

Frame.prototype.totalPins = function() {
	var total = 0;
	for(var i = 0; i < this.rolls.length; i++) {
		total = total + this._selectRoll(i).pins.length;
	};
	return total;
};

Frame.prototype._selectRoll = function(number) {
	return this.rolls[number];
};

Frame.prototype.isSpare = function() {
	return (this.totalPins() === 10);
};