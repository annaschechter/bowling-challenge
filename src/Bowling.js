function Bowling() {
	this.frames = {};
};

Bowling.prototype.startGame = function() {
	for(var i = 1; i <= 10; i++) {
	this.frames["frame"+i] = new Frame(i);
	};
};

Bowling.prototype.accessFrame = function(frameNum) {
	return (this.frames["frame"+frameNum]);
};

Bowling.prototype.currentFrame = function() {
	for(var i = 1; i <= 10; i++) {
		if(this.accessFrame(i).totalRolls() < 2) return this.accessFrame(i);
	};
	return this.accessFrame(10);
};

Bowling.prototype.totalScore = function() {
	total = 0;
	for(var i = 1; i <= 10; i++) {
		total = total + this.accessFrame(i).score();
	};
	return total;
};

Bowling.prototype.updateGameWith = function(roll) {
	if(this._isCurrentFrameOne()) return this._updateGameForFrameOneWith(roll);
	else if(this._isCurrentFrameTwo()) return this._updateGameForFrameTwoWith(roll);
	else if (this._isCurrentFrameFinal()) return this._updateGameForFinalFrameWith(roll);
	else return this._updateGameForOtherFramesWith(roll);
};

Bowling.prototype._isCurrentFrameOne = function() {
	return this.currentFrame().seqNum === 1;
};

Bowling.prototype._isCurrentFrameTwo = function() {
	return this.currentFrame().seqNum === 2;
};

Bowling.prototype._isCurrentFrameFinal = function() {
	return this.currentFrame().seqNum === 10;
};

Bowling.prototype._updateGameForFrameOneWith = function(roll) {
	this.currentFrame().addRoll(roll);
};

Bowling.prototype._updateGameForFrameTwoWith = function(roll) {
	if(this.accessFrame(1).hasStrike()) this._doublePinScore(roll);
	if(this.accessFrame(1).isSpare() && this.accessFrame(2).totalRolls() === 0) this._doublePinScore(roll);
	this.accessFrame(2).addRoll(roll);
};

Bowling.prototype._updateGameForOtherFramesWith = function(roll) {
	var num = this.currentFrame().seqNum;
	if(this._previousFrame().hasStrike() && this._twoFramesBack().hasStrike()) this._triplePinScore(roll);
	else if(this._previousFrame().hasStrike()) this._doublePinScore(roll);
	else if(this._previousFrame().isSpare() && this.currentFrame().totalRolls() === 0) this._doublePinScore(roll);	
	this.currentFrame().addRoll(roll);
};

Bowling.prototype._previousFrame = function() {
	return this.accessFrame(this.currentFrame().seqNum - 1);
};

Bowling.prototype._twoFramesBack = function() {
	return this.accessFrame(this.currentFrame().seqNum - 2);
};

Bowling.prototype._updateGameForFinalFrameWith = function(roll) {
	if(this.accessFrame(10).totalRolls() === 0) return this._finalFrameFirstRollUpdateWith(roll);
	if(this.accessFrame(10).totalRolls() === 1) return this._finalFrameSecondRollUpdateWith(roll);
	if(this.accessFrame(10).totalRolls() === 2) {
		this.accessFrame(10).addRoll(roll);
		return "The Game is Over";
	};
};

Bowling.prototype._finalFrameFirstRollUpdateWith = function(roll) {
	if(this._previousFrame().hasStrike() && this._twoFramesBack().hasStrike()) this._triplePinScore(roll);
	else if(this._previousFrame().hasStrike()) this._doublePinScore(roll);
	else if(this._previousFrame().isSpare()) this._doublePinScore(roll);
	this.accessFrame(10).addRoll(roll);
	return true;
};

Bowling.prototype._finalFrameSecondRollUpdateWith = function(roll) {
	if(!this.accessFrame(10).hasStrike() && !this.accessFrame(10).isSpare()) {
		this.accessFrame(10).addRoll(roll);
		return "The Game is Over";
	};
	if(this._previousFrame().hasStrike()) this._doublePinScore(roll);
	this.accessFrame(10).addRoll(roll);
};

Bowling.prototype._doublePinScore = function(roll) {
	roll.pins = roll.pins.map(function(pin) {return pin = new Pin(2)});
};

Bowling.prototype._triplePinScore = function(roll) {
	roll.pins = roll.pins.map(function(pin) {return pin = new Pin(3)});
};



