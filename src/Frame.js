function Frame(seqNum) {
	this.rolls = [];
	this.seqNum = seqNum || 0;
};

Frame.prototype.addRoll = function(roll) {
	if (this._isFinalFrame()) return this.rolls.push(roll);
	this.rolls.push(roll)
	if(roll.isStrike()) return this.rolls.push(new Roll);	
};

Frame.prototype.score = function() {
	var total = 0;
	for(var i = 1; i <= this.totalRolls(); i++) {
		total = total + this._selectRoll(i).score();
	};
	return total;
};

Frame.prototype.isSpare = function() {
	return (this.totalPins() === 10);
};

Frame.prototype.hasStrike = function() {
	if(this.totalRolls() === 0) return false;
	return (this._selectRoll(1).isStrike());
};

Frame.prototype.totalPins = function() {
	var total = 0;
	for(var i = 1; i <= this.totalRolls(); i++) {
		total = total + this._selectRoll(i).pins.length;
	};
	return total;
};

Frame.prototype.totalRolls = function() {
	return (this.rolls.length);
};

Frame.prototype._isFinalFrame = function() {
	return (this.seqNum == 10);
};

Frame.prototype._selectRoll = function(number) {
	return this.rolls[number - 1];
};



