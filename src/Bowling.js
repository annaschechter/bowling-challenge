function Bowling() {
	this.frames = {};
};

Bowling.prototype.startGame = function() {
		for(var i = 1; i <= 10; i++) {
		this.frames["frame"+i] = new Frame;
	};
};

Bowling.prototype.openFrame = function(frameNum) {
	return (this.frames["frame"+frameNum]);
};

Bowling.prototype.currentFrame = function() {
	for(var i = 1; i <= Object.keys(this.frames).length; i++) {
		if(this.openFrame(i).rolls.length == 2) i += 1;
		else return this.openFrame(i);
	};
};
