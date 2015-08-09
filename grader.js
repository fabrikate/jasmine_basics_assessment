// ###Letter Grader


module.exports = {
	letterGrader: function (testScore) {
		if (typeof(testScore) !== "number") {
			return 'Please enter a valid number';
		} else if(testScore >= 90) {
			return 'A';
		} else if (testScore >= 80) {
			return 'B';
		} else if (testScore >= 70) {
			return 'C';
		} else if (testScore >= 60) {
			return 'D';
		}
		return 'F';
	},

	scoreAverage: function(arrayTestScore) {
		var numScores = arrayTestScore.length;
		if (numScores === 0) {
			return 'Please enter a valid array';
		} else {
		var sum = 0;
		for(var i = 0; i < numScores; i++){
				sum += arrayTestScore[i];
			}
		} return (sum / numScores).toFixed(2);
	},

	medianScore: function(arrayTestScore) {
		var grades = arrayTestScore.sort(function(a, b) {
			return a-b;
		});
		var half = Math.floor(grades.length / 2);
		if(grades.length % 2 !== 0 ) {
			return grades[half];
		} else if (grades.length % 2 === 0) {
			var average = (grades[half -1] + grades[half]) /2;
			return average.toFixed(2);
		}
	},

	modeScore: function (array) {
    if(array.length == 0) {
    	return null;
    }
    var gradesModeObj = {};
    var maxNum = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
    	var el = array[i];
    	if(gradesModeObj[el] == null)
    		gradesModeObj[el] = 1;
    	else
    		gradesModeObj[el]++;
    	if(gradesModeObj[el] > maxCount)
    	{
    		maxNum = el;
    		maxCount = gradesModeObj[el];
    	}
    }
    return maxNum;
}


}

