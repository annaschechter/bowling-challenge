function Frame(seqNum) {
	this.rolls = [];
	this.seqNum = seqNum || 0;
};

Frame.prototype.addRoll = function(roll) {
	if(this.seqNum === 10) return this._addRollFinalFrame(roll);
	if(this.rolls.length >= 2) throw("This frame already has two rolls");
	if(this.totalPins() + roll.pins.length > 10) throw("Invalid roll, the total number of pins cannot be greater than 10");
	if(roll.isStrike()) 
		{this.rolls.push(roll);
		 this.rolls.push(new Roll);
		 return true};
	this.rolls.push(roll)	
};

Frame.prototype._addRollFinalFrame = function(roll) {
	if(this.rolls.length >= 3) throw("This frame already has three rolls");
	this.rolls.push(roll);
};

Frame.prototype.score = function() {
	var total = 0;
	for(var i = 0; i < this.rolls.length; i++) {
		total = total + this._selectRoll(i).score();
	};
	return total;
};

Frame.prototype.isSpare = function() {
	return (this.totalPins() === 10);
};

Frame.prototype.hasStrike = function() {
	if(this.rolls.length === 0) return false;
	return (this._selectRoll(0).isStrike());
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



