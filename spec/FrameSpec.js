describe('Frame', function() {

	beforeEach(function() {
		frame = new Frame;
		roll = new Roll;
	});

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
		pin = new Pin(2);
		pin.hit();
		roll.addPin(pin);
		frame.addRoll(roll);
		expect(frame.score()).toEqual(2);
	});
});