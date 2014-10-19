describe('Bowling', function() {
	it('can contain a number of frames', function() {
		bowling = new Bowling;
		expect(bowling.frames).toEqual({});
	});

	it('if started, consists of 10 frames', function() {
		bowling = new Bowling;
		bowling.startGame();
		expect(Object.keys(bowling.frames).length).toEqual(10);
	});

	it('if started, every frame has a number', function() {
		bowling = new Bowling;
		bowling.startGame();
		expect(bowling.frames["frame1"]).toEqual(rolls: []);
	});

	
});
