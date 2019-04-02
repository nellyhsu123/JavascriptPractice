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
*/

/*******************
* The Ternary Operator
*/

var firstName = 'John';
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
*/

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





