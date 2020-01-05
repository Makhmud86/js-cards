/* function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){

	var result ="";
	result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb +".";

	return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly")); 

var ourArray = [50, 60, 70];

//var ourArray = [["Bulls", 23], ["White Sox", 45]];


var myArray = ourArray.length;

console.log(myArray);*/

function orderMyLogic (val) {
	if (val < 5) {
		return "Less than 5";
	} else if (val <10) {
		return "Less than 10";
	} else {
		return "Greater than or equal to 10";
	}
}

console.log(orderMyLogic(12));