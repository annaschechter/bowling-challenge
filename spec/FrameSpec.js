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
		roll2 = new Roll;
		roll2.createRoll(5);
		frame.addRoll(roll1);
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

	it('can have a maximum of two rolls', function() {
		frame.addRoll(new Roll);
		frame.addRoll(new Roll);
		expect(function(){frame.addRoll(roll);}).toThrow("This frame already has two rolls");
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

	it('can only add a second roll if the first one was not a strike', function() {
		roll.createRoll(10);
		roll2 = new Roll;
		frame.addRoll(roll);
		expect(function(){frame.addRoll(roll2);}).toThrow("This frame already has two rolls");
	});

	it('can only add a second roll if the sum of two rolls is max of 10', function() {
		roll.createRoll(9);
		roll2 = new Roll();
		roll2.createRoll(5);
		frame.addRoll(roll);
		expect(function(){frame.addRoll(roll2);}).toThrow("Invalid roll, the total number of pins cannot be greater than 10");
	});

	describe('FinalFrame', function() {

		it('is just like a normal frame but it can have a maximum of 3 rolls', function() {
			frame10 = new Frame(10); 
			frame10.addRoll(new Roll);
			frame10.addRoll(new Roll);
			frame10.addRoll(new Roll);
			expect(function(){frame10.addRoll(roll);}).toThrow("This frame already has three rolls");
		});
	});

});