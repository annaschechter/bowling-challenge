function Roll() {
	this.pins = [];
};

Roll.prototype.createRoll = function(pinQty) {
	if(this.pins.length !== 0) throw("This roll has already been played");
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
	if(!pin.isHit) throw("This pin was not knocked down in this roll");
	if(this.pins.length >= 10) throw("This roll is already a strike");
	this.pins.push(pin);
};

Roll.prototype._selectPin = function(number) {
	return this.pins[number];
};



