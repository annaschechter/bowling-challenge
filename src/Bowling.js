function Bowling() {
	this.frames = {};
};

Bowling.prototype.startGame = function() {
		for(var i = 1; i <= 10; i++) {
		this.frames["frame"+i] = new Frame;
	};
};
