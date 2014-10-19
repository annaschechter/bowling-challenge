describe('Bowling', function() {

	beforeEach(function() {
		bowling = new Bowling;
		bowling.startGame();
		roll = new Roll;
	});

	it('if started, consists of 10 frames', function() {
		expect(Object.keys(bowling.frames).length).toEqual(10);
	});

	it('can access every frame', function() {
		roll.createRoll(10);
		bowling.openFrame(1).addRoll(roll);
		expect(bowling.openFrame(1).score()).toEqual(10);
	});

	it('knows the current state of the game', function() {
		expect(bowling.currentFrame().seqNum).toEqual(1);
	});

	it('knows the total score for the game', function() {
		expect(bowling.score()).toEqual(0);
		roll.createRoll(5);
		bowling.currentFrame().addRoll(roll);
		expect(bowling.score()).toEqual(5);
	});

	describe('can add bonus score', function() {

		beforeEach(function() {
			roll1 = new Roll;
			roll2 = new Roll;
			roll3 = new Roll;
			roll2.createRoll(4);
			roll3.createRoll(2);
		});

		it('for a strike', function() {
			roll1.createRoll(10);
			bowling.updateGame(roll1);
			bowling.updateGame(roll2);
			bowling.updateGame(roll3);
			expect(bowling.openFrame(2).score()).toEqual(12);
		});

		it('for a spare', function() {
			roll.createRoll(5);
			roll1.createRoll(5);
			bowling.updateGame(roll);
			bowling.updateGame(roll1);
			bowling.updateGame(roll2);
			bowling.updateGame(roll3);
			expect(bowling.openFrame(2).score()).toEqual(10);
		});
	});
});
