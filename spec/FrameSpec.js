describe('Frame', function() {

	beforeEach(function() {
		frame = new Frame;
		roll = new Roll;
		pin = new Pin;
		pin.hit();
	});

	makeSpare = function(frame) {
		roll1 = new Roll; 
		roll1.createRoll(5);
		frame.addRoll(roll1);
		roll2 = new Roll;
		roll2.createRoll(5);
		frame.addRoll(roll2);
	};

	it('should consist of a number of rolls', function() {
		expect(frame.rolls.length).toEqual(0);
	});

	it('can have a sequence number', function() {	
		frame = new Frame(2);
		expect(frame.seqNum).toEqual(2);
	});

	it('has a default sequence number of zero', function() {
		expect(frame.seqNum).toEqual(0);
	});


	it('can add rolls', function() {
		frame.addRoll(roll);
		expect(frame.rolls.length).toEqual(1);
	});

	it('knows the total score of all the rolls in this frame', function() {
		roll.createRoll(3);
		frame.addRoll(roll);
		expect(frame.score()).toEqual(3);
	});

	it('total number of pins knocked down in this frame', function() {
		roll.createRoll(4);
		frame.addRoll(roll);
		expect(frame.totalPins()).toEqual(4);
	});

	it('knows if it is a spare', function() {
		makeSpare(frame);
		expect(frame.isSpare()).toBe(true);
	})

	it('knows if it is not a spare', function() {
		roll.createRoll(1);
		frame.addRoll(roll);
		expect(frame.isSpare()).toBe(false);
	});

	it('knows to add two rolls if the roll is a strike', function() {
		roll.createRoll(10);
		frame.addRoll(roll);
		expect(frame.rolls.length).toEqual(2);
	});

});