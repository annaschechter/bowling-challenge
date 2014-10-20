function Bowling() {
	this.frames = {};
};

Bowling.prototype.startGame = function() {
	for(var i = 1; i <= 10; i++) {
	this.frames["frame"+i] = new Frame(i);
	};
	// this.frames["frame"+10] = new FinalFrame;
};

Bowling.prototype.accessFrame = function(frameNum) {
	return (this.frames["frame"+frameNum]);
};

Bowling.prototype.currentFrame = function() {
	for(var i = 1; i <= Object.keys(this.frames).length; i++) {
		if(this.accessFrame(i).rolls.length < 2) return this.accessFrame(i);
	};
	return this.accessFrame(10);
};

Bowling.prototype.score = function() {
	total = 0;
	for(var i = 1; i <= Object.keys(this.frames).length; i++) {
		total = total + this.accessFrame(i).score();
	};
	return total;
};

Bowling.prototype.updateGame = function(roll) {
	var num = this.currentFrame().seqNum;

	if(num === 1) return this._updateGameForFrameOne(roll);
	else if(num === 2) return this._updateGameForFrameTwo(roll);
	else if (num === 10) return this._updateGameForFinalFrame(roll);
	else return this._updateGameForOtherFrames(roll);
};

Bowling.prototype._updateGameForFrameOne = function(roll) {
	this.currentFrame().addRoll(roll);
};

Bowling.prototype._updateGameForFrameTwo = function(roll) {
	if(this.accessFrame(1).hasStrike()) roll.pins = roll.pins.map(function(pin) {return pin = new Pin(2)});
	if(this.accessFrame(1).isSpare() && this.accessFrame(2).rolls.length === 0) roll.pins = roll.pins.map(function(pin) {return pin = new Pin(2)});
	this.accessFrame(2).addRoll(roll);
};

Bowling.prototype._updateGameForOtherFrames = function(roll) {
	var num = this.currentFrame().seqNum;
	if(this.accessFrame(num - 1).hasStrike() && this.accessFrame(num - 2).hasStrike()) {
		roll.pins = roll.pins.map(function(pin) {return pin = new Pin(3)});
	} else if(this.accessFrame(num - 1).hasStrike()) {
		roll.pins = roll.pins.map(function(pin) {return pin = new Pin(2)});
	} else if(this.accessFrame(num-1).isSpare() && this.currentFrame().rolls.length === 0) {
		roll.pins = roll.pins.map(function(pin) {return pin = new Pin(2)});	
	}; 
	this.currentFrame().addRoll(roll);
};

Bowling.prototype._updateGameForFinalFrame = function(roll) {
	if(this.accessFrame(10).rolls.length === 0) return this._finalFrameFirstRoll(roll);
	if(this.accessFrame(10).rolls.length === 1) return this._finalFrameSecondRoll(roll);
	if(this.accessFrame(10).rolls.length === 2) {
		this.accessFrame(10).addRoll(roll);
		return "The Game is Over";
	};
};

Bowling.prototype._finalFrameFirstRoll = function(roll) {
	if(this.accessFrame(9).hasStrike() && this.accessFrame(8).hasStrike()) {
		roll.pins = roll.pins.map(function(pin) {return pin = new Pin(3)});
	} else if(this.accessFrame(9).hasStrike()) {
		roll.pins = roll.pins.map(function(pin) {return pin = new Pin(2)});
	} else if(this.accessFrame(9).isSpare()) {
		roll.pins = roll.pins.map(function(pin) {return pin = new Pin(2)});	
	};
	this.accessFrame(10).addRoll(roll);
	return true;
};

Bowling.prototype._finalFrameSecondRoll = function(roll) {
	if(this.accessFrame(9).hasStrike()) {
		roll.pins = roll.pins.map(function(pin) {return pin = new Pin(2)});
		this.accessFrame(10).addRoll(roll);
		return true;
	} else if(this.accessFrame(10).hasStrike()) {
		this.accessFrame(10).addRoll(roll);
		return true;
	}else if((this.accessFrame(10).totalPins() + roll.pins.length) === 10) {
		this.accessFrame(10).addRoll(roll);
		return true;
	} else {
		this.accessFrame(10).addRoll(roll);
		return "The Game is Over";
	};
};


