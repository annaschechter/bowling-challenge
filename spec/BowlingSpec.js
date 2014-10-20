describe('Bowling', function() {

	beforeEach(function() {
		bowling = new Bowling;
		bowling.startGame();
		roll = new Roll;
	});

	var playGameNineFrames = function(bowling) {
		for(var i = 1; i < 19; i++){
			rollTest = new Roll;
			rollTest.createRoll(4);
			bowling.updateGame(rollTest);
		};
	};

	var playPerfectGame = function(bowling) {
		for(var i = 1; i < 13; i++) {
			rollTest = new Roll;
			rollTest.createRoll(10);
			bowling.updateGame(rollTest);
		};
	};

	it('if started, consists of 10 frames', function() {
		expect(Object.keys(bowling.frames).length).toEqual(10);
	});

	it('can access every frame', function() {
		roll.createRoll(10);
		bowling.accessFrame(1).addRoll(roll);
		expect(bowling.accessFrame(1).score()).toEqual(10);
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
			roll1.createRoll(10);
			roll2.createRoll(4);
			roll3.createRoll(2);
		});

		it('for a strike', function() {
			bowling.updateGame(roll1);
			bowling.updateGame(roll2);
			bowling.updateGame(roll3);
			expect(bowling.accessFrame(2).score()).toEqual(12);
		});

		it('for a spare', function() {
			roll.createRoll(6);
			roll4 = new Roll;
			roll4.createRoll(4);
			bowling.updateGame(roll);
			bowling.updateGame(roll2);
			bowling.updateGame(roll3);
			bowling.updateGame(roll4);
			expect(bowling.accessFrame(2).score()).toEqual(8);
		});

		it('for 2 consequtive strikes', function() {
			roll4 = new Roll;
			roll5 = new Roll;
			roll4.createRoll(10);
			roll5.createRoll(5);
			bowling.updateGame(roll1);
			bowling.updateGame(roll4);
			bowling.updateGame(roll5);
			expect(bowling.accessFrame(3).score()).toEqual(15);
			expect(bowling.score()).toEqual(45);
		});
	});

	describe('knows when to end the game', function() {

		it('if the final frame had no strikes or spares', function() {
			playGameNineFrames(bowling);
			roll22 = new Roll;
			roll33 = new Roll;
			roll22.createRoll(5);
			roll33.createRoll(2);
			bowling.updateGame(roll22);
			expect(bowling.updateGame(roll33)).toEqual("The Game is Over");

		});

		it('if the final frame has a strike', function() {
			playGameNineFrames(bowling);
			roll22 = new Roll;
			roll33 = new Roll;
			roll44 = new Roll;
			roll22.createRoll(10);
			roll33.createRoll(2);
			roll44.createRoll(8);
			bowling.updateGame(roll22);
			bowling.updateGame(roll33);
			expect(bowling.updateGame(roll44)).toEqual("The Game is Over");
		});

		it('if the final frame has a spare', function() {
			playGameNineFrames(bowling);
			roll22 = new Roll;
			roll33 = new Roll;
			roll44 = new Roll;
			roll22.createRoll(5);
			roll33.createRoll(5);
			roll44.createRoll(8);
			bowling.updateGame(roll22);
			bowling.updateGame(roll33);
			expect(bowling.updateGame(roll44)).toEqual("The Game is Over");
		});
	});

	it('perfect game score is equal to 300', function() {
		playPerfectGame(bowling);
		expect(bowling.score()).toEqual(300);
	})
});
