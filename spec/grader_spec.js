var testGrader = require('../grader.js');

describe('Test Score Grader', function() {
	it('should return a letter grade from a test score', function() {
		expect(testGrader.letterGrader(92)).toEqual('A');
	});

	it('should return a letter grade from a test score', function() {
		expect(testGrader.letterGrader(80)).toEqual('B');
	});

	it('should return a letter grade from a test score', function() {
		expect(testGrader.letterGrader(62)).toEqual('D');
	});

	it('should return a letter grade from a test score', function() {
		expect(testGrader.letterGrader(2)).toEqual('F');
	});

	it('should return an error message', function() {
		expect(testGrader.letterGrader(true)).toEqual('Please enter a valid number');
	});

	it('should return an error message', function() {
		expect(testGrader.letterGrader('abc')).toEqual('Please enter a valid number');
	});

});

describe('Average Score', function() {
	it('should take an array of scores and give the average', function() {
		expect(testGrader.scoreAverage([90,95,87,60])).toEqual("83.00");
	});

	it('should take an array of scores and give the average', function() {
		expect(testGrader.scoreAverage([1,2,3,4])).toEqual("2.50");
	});

	// it('should return an error message if someone puts in a non-number', function() {
	// 	expect(testGrader.scoreAverage([1,2,'a',4])).toEqual('Please enter a valid number');
	// });
});

describe('Median Score', function() {
	it('should give the median score', function() {
		expect(testGrader.medianScore([1,2,3,4,5])).toEqual(3);
	});

	it('should give the median score', function() {
		expect(testGrader.medianScore([1,2,3,4,5,6])).toEqual("3.50");
	});
});

describe('Mode Score', function() {
	it('should return the most frequent number in an array', function() {
		expect(testGrader.modeScore([1,1,1,2,2])).toEqual(1);
	})
})
