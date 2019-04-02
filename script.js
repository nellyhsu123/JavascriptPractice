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