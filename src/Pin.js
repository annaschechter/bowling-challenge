function Pin(score) {
	this.score = score || 1;
	this.isHit = false;
};

Pin.prototype.hit = function() {
	this.isHit = true;
};
