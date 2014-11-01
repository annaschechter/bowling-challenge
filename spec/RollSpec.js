describe('Roll', function() {

	beforeEach(function(){
		roll = new Roll;
		pin = new Pin;
	});

	it('can hold a number of pins knocked down in this roll', function() {
		expect(roll.pins.length).toBe(0);
	});

	it('can add pins', function() {
		pin.hit();
		roll._addPin(pin);
		expect(roll.pins.length).toEqual(1);
	});

	describe('should know the total score of pins held', function() {

		it('when no pins are held', function() {
			expect(roll.score()).toEqual(0);
		});

		it('when 10, one score pins are held', function() {
			roll.createRoll(10);
			expect(roll.score()).toEqual(10);
		});

		it('when one, two score pin is held', function() {
			pin = new Pin(2);
			pin.hit();
			roll._addPin(pin);
			expect(roll.score()).toEqual(2);
		});

	});

	it('knows if the roll is not a strike', function() {
		expect(roll.isStrike()).toBe(false);
	});

	it('knows if the roll is a strike', function() {
		roll.createRoll(10);
		expect(roll.isStrike()).toBe(true);
	});

	it('can add multiple pins in one go', function() {
		roll.createRoll(3);
		expect(roll.pins.length).toEqual(3);
		expect(roll.score()).toEqual(3)
	});
	
});