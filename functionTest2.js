

var tripleFive = function() {
	var poot ="Five!";
	for (var i = 0; i <= 2; i++) {	    
	    console.log(poot);	    
	}
};
console.log(tripleFive());

//---------------------------------------

var lastLetter = function(word) {
	var foo = word.charAt(word.length - 1);
	return(foo);
}
console.log(lastLetter("hello"));
console.log(lastLetter("island"));

// -----------------------------------

var square = function(number) {
	var sum = number * number;
	return(sum);
}
console.log(square(3));
console.log(square(5));

// ---------------------------------------

var negate = function(newNumber){
	// var reverse = (0 - newNumber);
	var reverse = -newNumber;
	return(reverse);
}
console.log(negate(5));
console.log(negate(-8));

//----------------------------------------

var toArray = function(first, second, third) {
	var list =  [first, second, third];
	return(list);
}
console.log(toArray(1, 2, 5));
console.log(toArray(8, 9, 10));

//-----------------------------------------

var startsWithA = function(animal) {
	var firstChar = animal.charAt(0);
	if (firstChar == 'a') {
		return true;
	} 
	else {
		return false;
	}
};

//------------------------------------------

var excite = function(word){
	var exclaim = (word + '!!!');
	return(exclaim);
}
console.log(excite("yes"));

//------------------------------------------

var sun = function(word) {
	var partOf = word.indexOf('sun');
	if (partOf >= 0) {
		return true;
	}
	else {
		return false;
	}	
}

//------------------------------------

var tiny = function(digit){
	var number = digit;
	if ((number > 0) && (number < 1)) {
		return true;
	}
	else {
		return false;
	}
}

//------------------------------------

var getSeconds = function(time) {
	var findColon = time.indexOf(":");
	//return(findColon);
	var totaltime = (time.slice(0,findColon)) * 60 + Number(time.slice(findColon +1, time.length));
	return(totaltime);
}
console.log(getSeconds('02:30'));


















