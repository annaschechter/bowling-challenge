function Roll() {
	this.pins = [];
};

Roll.prototype.createRoll = function(pinQty) {
	for(var i = 1; i <= pinQty; i++) {
		pin = new Pin;
		pin.hit();
		this._addPin(pin);
	};
};

Roll.prototype.score = function() {
	var total = 0;
	for(var i = 0; i < this.pins.length; i++) {
		total = total + this._selectPin(i).score;
	};
	return total;
};

Roll.prototype.isStrike = function() {
	if(this.pins.length >= 10)return true;
	else return false; 
};

Roll.prototype._addPin = function(pin) {
	this.pins.push(pin);
};

Roll.prototype._selectPin = function(number) {
	return this.pins[number];
};



