function Frame(seqNum) {
	this.rolls = [];
	this.seqNum = seqNum || 0;
};

Frame.prototype.addRoll = function(roll) {
	if (this.seqNum == 10) {
		this.rolls.push(roll);
		return true};
	if(roll.isStrike()) 
		{this.rolls.push(roll);
		 this.rolls.push(new Roll);
		 return true};
	this.rolls.push(roll)	
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



