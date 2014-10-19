describe('Pin', function() {

	beforeEach(function() {
		pin = new Pin;
	});

	it('should have an assigned score', function() {
		pin = new Pin(2);
		expect(pin.score).toEqual(2);
	});

	it('should have a default score', function() {
		expect(pin.score).toEqual(1);
	});

	it('should know if it has been hit', function() {
		expect(pin.isHit).toBe(false);
	});

	it('can be hit', function() {
		pin.hit();
		expect(pin.isHit).toBe(true);
	});

});