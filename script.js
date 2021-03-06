console.log('Hello World!!!');

/*********************
NOTES
can start variable name with underscore (_), letter, or dollar sign ($)
can't use keywords to name variables
*/

//Type coercion
/*var firstName = 'Michael';
var age = 35;
console.log(firstName + ' ' + age);
var hobby = prompt('What is his favorite hobby?');
console.log(firstName + ' favorite hobby is ' + hobby);
*/
/*
var mHeight = 1.76;
var mWeight = 68;
var jHeight = 1.56;
var jWeight = 70;
var mBMI = mWeight / (mHeight * mHeight);
var jBMI = jWeight / (jHeight * jHeight);
console.log("Mark's BMI: " + mBMI);
console.log("John's BMI: " + jBMI);
var mHigherBMI = mBMI > jBMI;
console.log("Is Mark's BMI higher than John's? " + mHigherBMI);
*/

/*******************
* If / else statements
var firstName = 'John';
var civilStatus = 'single';
if(civilStatus === 'married') {
	console.log(firstName + ' is married!');
} else {
	console.log(firstName + ' will hopefully marry soon :)');
}
/*******************
* The Ternary Operator
*/

/*var firstName = 'John';
var age = 22;
age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice') 
//Switch statement
var job = 'teacher';
switch (job) {
	case 'teacher':
		console.log(firstName + ' teaches kids how to code.');
		break;
	case 'driver':
		console.log(firstName + ' drives an uber.');
		break;
	default:
		console.log(firstName + ' does something else.');
}
/*******************
* Truthy and Falsy values and equlaity operators
*/

// falsy values: undefined, null, 0, '', NaN (Not a Number)
// truthy values: NOT falsy values

/**********************
* Coding Challenge 2
jScoreAvg = (100 + 100 + 100) / 3
mScoreAvg = (120 + 89 + 95) / 3
maryScoreAvg = (96 + 87 + 115) / 3
if(jScoreAvg > mScoreAvg && jScoreAvg > maryScoreAvg) {
	console.log('John\'s team wins with an average score of: ' + jScoreAvg);
}  else if(mScoreAvg > jScoreAvg && mScoreAvg > maryScoreAvg){
	console.log('Mike\'s team wins with an average score of: ' + mScoreAvg);
} else if(maryScoreAvg > jScoreAvg && maryScoreAvg > mScoreAvg){
	console.log('Marry\'s team wins with an average score of: ' + maryScoreAvg);
} else {
	console.log('It\'s a tie!');
}
var john = ['John', 'Smith', 1990, 'designer'];
var isDesigner = john.indexOf('designer') !== -1 ? 'John IS a designer' : 'John is NOT a designer';
console.log(isDesigner);
*/

/*******************
* Coding Challenge 3


function tipCalculator(bill) {
	if(bill < 50) {
		return bill * 0.2;
	} else if(bill > 50 && bill < 200) {
		return bill * 0.15;
	} else if(bill > 200) {
		return bill * 0.1;
	}
}
var bills = [124, 48, 268];
var tips = [];
var totals = [];

tips.push(tipCalculator(bills[0]));
tips.push(tipCalculator(bills[1]));
tips.push(tipCalculator(bills[2]));

console.log(tips);

totals.push(bills[0] + tips[0]);
totals.push(bills[1] + tips[1]);
totals.push(bills[2] + tips[2]);

console.log(totals);

*/

/**************
* Coding Challenge 4


var mark = {
	fullName: 'Mark Sanchez',
	mass: 80,
	height: 1.8,
	calcBMI: function() {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
}

var john = {
	fullName: 'John Smith',
	mass: 74,
	height: 1.68,
	calcBMI: function() {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
}

if(mark.calcBMI() > john.calcBMI()) {
	console.log(mark.fullName + ' has a BMI of ' + mark.bmi + ' which is greater than ' + john.fullName + ' who has a BMI of ' + john.bmi);
} else if(mark.calcBMI() < john.calcBMI()){
	console.log(john.fullName + ' has a BMI of ' + john.bmi + ' which is greater than ' + mark.fullName + ' who has a BMI of ' + mark.bmi);
} else {
	console.log('They have the same BMI');
}
*/

/********************
* Coding Challenge 5
*/

var john = {
	firstName: 'John',
	bills: [124, 48, 268, 180, 42],
	tips: [],
	final: [],
	calcTip: function() {

		for(var i = 0; i < this.bills.length; i++){
			var bill = this.bills[i]; 
			if(bill < 50) {
				this.tips[i] = this.bills[i] * 0.2;
			} else if(bill >= 50 && bill < 200) {
				this.tips[i] = this.bills[i] * 0.15;
			} else {
				this.tips[i] = this.bills[i] * 0.1;
			}

			//console.log(this.tips[i], this.bills[i]);

			this.final[i] = this.bills[i] + this.tips[i];

			//console.log(this.final[i]);
		}
	}
}

john.calcTip();

var mark = {
	firstName: 'Mark',
	bills: [77, 475, 110, 45],
	tips: [],
	final: [],
	calcTip: function() {
		for(var i = 0; i < this.bills.length; i++){
			if(this.bills[i] < 100) {
				this.tips[i] = this.bills[i] * 0.2;
			} else if(this.bills[i] >= 100 && this.bills[i] < 300) {
				this.tips[i] = this.bills[i] * 0.1;
			} else {
				this.tips[i] = this.bills[i] * 0.25;
			}

			//console.log(this.tips[i], this.bills[i]);

			this.final[i] = this.bills[i] + this.tips[i];

			//console.log(this.final[i]);
		}
	}
}

mark.calcTip();

//console.log(john, mark);

function avgTip(tips) {
	var totalTips = 0;
	var avgTips = 0;
	for(var i = 0; i < tips.length; i++) {
		totalTips += tips[i];
	}
	avgTips = totalTips / tips.length;
	return avgTips;
}

john.avgT = avgTip(john.tips);
mark.avgT = avgTip(mark.tips);

console.log(john, mark);



