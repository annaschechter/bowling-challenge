describe('Frame', function() {

	beforeEach(function() {
		frame = new Frame;
		roll = new Roll;
		pin = new Pin;
		pin.hit();
	});

	makeSpare = function(frame) {
		roll1 = new Roll; 
			for(var i = 1; i < 6; i++){
				pin = new Pin;
				pin.hit();
				roll1.addPin(pin);
			};

		roll2 = new Roll;
			for(var i = 1; i < 6; i++){
				pin = new Pin;
				pin.hit();
				roll2.addPin(pin);
			};
		frame.addRoll(roll1);
		frame.addRoll(roll2);
	};

	it('should consist of a number of rolls', function() {
		expect(frame.rolls.length).toEqual(0);
	});

	it('can add rolls', function() {
		frame.addRoll(roll);
		expect(frame.rolls.length).toEqual(1);
	});

	it('can have a maximum of two rolls', function() {
		frame.addRoll(new Roll);
		frame.addRoll(new Roll);
		expect(function(){frame.addRoll(roll);}).toThrow("This frame already has two rolls");
	});

	it('knows the total score of all the rolls in this frame', function() {
		pinDouble = new Pin(2);
		pinDouble.hit();
		roll.addPin(pin);
		roll.addPin(pinDouble);
		frame.addRoll(roll);
		expect(frame.score()).toEqual(3);
	});

	it('total number of pins knocked down in this frame', function() {
		roll.addPin(pin);
		frame.addRoll(roll);
		expect(frame.totalPins()).toEqual(1);
	});

	it('knows if it is a spare', function() {
		makeSpare(frame);
		expect(frame.isSpare()).toBe(true);
	})

	it('knows if it is not a spare', function() {
		roll.addPin(pin);
		frame.addRoll(roll);
		expect(frame.isSpare()).toBe(false);
	});
});