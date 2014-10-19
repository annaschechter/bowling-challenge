describe('Roll', function() {

	beforeEach(function(){
		roll = new Roll;
		pin = new Pin;
	});

	strikeUpRoll = function(roll){
		for(var i = 1; i < 11; i++){
			pin = new Pin;
			pin.hit();
			roll.addPin(pin);
		};
	};

	it('should hold a number of pins hit in this throw', function() {
		expect(roll.pins.length).toBe(0);
	});

	it('can add pins', function() {
		pin.hit();
		roll.addPin(pin);
		expect(roll.pins.length).toEqual(1);
	});

	it('should only store pins that were hit', function() {
		expect(function(){roll.addPin(pin);}).toThrow("This pin was not knocked down in this roll");
	});

	it('should allow to add maximum of 10 pins', function() {
		strikeUpRoll(roll);
		expect(function(){roll.addPin(pin);}).toThrow("This roll is already a strike");
	})

	describe('should know the total score of pins held', function() {

		it('when no pins are held', function() {
			expect(roll.score()).toEqual(0);
		});

		it('when 10 one score pins are held', function() {
			strikeUpRoll(roll);
			expect(roll.score()).toEqual(10);
		});

		it('when one two score pin is held', function() {
			pin = new Pin(2);
			pin.hit();
			roll.addPin(pin);
			expect(roll.score()).toEqual(2);
		});

	});

	it('knows if the roll is not a strike', function() {
		expect(roll.isStrike()).toBe(false);
	});

	it('knows if the roll is a strike', function() {
		strikeUpRoll(roll);
		expect(roll.isStrike()).toBe(true);
	});

	it('can add up to 10 pins in one go', function() {
		roll.createRoll(3, 2);
		expect(roll.pins.length).toEqual(3);
		expect(roll.score()).toEqual(3 * 2)
	});

	it('can add a maximum of 10 pins', function() {
		expect(function() {roll.createRoll(11, 1)};).toThrow("This roll is already a strike");
	});
	
});