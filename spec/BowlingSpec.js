describe('Bowling', function() {

	beforeEach(function() {
		bowling = new Bowling;
		roll = new Roll;
		pin = new Pin;
	});

	it('can contain a number of frames', function() {
		expect(bowling.frames).toEqual({});
	});

	it('if started, consists of 10 frames', function() {
		bowling.startGame();
		expect(Object.keys(bowling.frames).length).toEqual(10);
	});

	it('can access every frame', function() {
		roll.createRoll(10);
		bowling.startGame();
		bowling.openFrame(1).addRoll(roll);
		expect(bowling.openFrame(1).score()).toEqual(10);
	});

	it('knows the current state of the game', function() {
		bowling.startGame();
		expect(bowling.currentFrame()).toEqual(rolls: []);
	});



});
