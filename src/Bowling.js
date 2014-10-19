function Bowling() {
	this.frames = {};
};

Bowling.prototype.startGame = function() {
		for(var i = 1; i <= 10; i++) {
		this.frames["frame"+i] = new Frame(i);
	};
};

Bowling.prototype.openFrame = function(frameNum) {
	return (this.frames["frame"+frameNum]);
};

Bowling.prototype.currentFrame = function() {
	for(var i = 1; i <= Object.keys(this.frames).length; i++) {
		if(this.openFrame(i).rolls.length < 2) return this.openFrame(i);
	};
};

Bowling.prototype.score = function() {

	total = 0;
	for(var i = 1; i <= Object.keys(this.frames).length; i++) {
		total = total + this.openFrame(i).score();
	};
	return total;
};

Bowling.prototype.updateGame = function(roll) {
	var num = this.currentFrame().seqNum;
	if((num !== 1) && (this.openFrame(num-1).hasStrike())) {
		roll.pins = roll.pins.map(function(pin) {return pin = new Pin(2)});
		this.currentFrame().addRoll(roll);
		return true;
	};
	if((this._spareBonus()) && (this.openFrame(num-1).isSpare())) {
	roll.pins = roll.pins.map(function(pin) {return pin = new Pin(2)});
	this.currentFrame().addRoll(roll);
	return true;
    };

	this.currentFrame().addRoll(roll);
};

Bowling.prototype._spareBonus = function() {
	var num = this.currentFrame().seqNum;
	return((num !== 1) && (this.currentFrame().rolls.length === 0));
};

