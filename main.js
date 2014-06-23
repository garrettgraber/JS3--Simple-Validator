


var input_info = window.prompt("Ten digit phone number (with dashes): ", "");


input_info_length = input_info.length;

if ( (input_info_length !== 12) || (input_info.charAt(3) !== "-") || (input_info.charAt(7) !== "-") ) {
	alert("Phone number is invalid");
}

else {
	alert("Phone number is valid");
}

var input_info = window.prompt("Enter your birth date: ", "xx/xx/xx");

if ( ( input_info.length !== 8 ) || (input_info.charAt(2) !== "/" ) || ( input_info.charAt(5) !== "/" ) || ( input_info.charAt(0) === "x" ) ) {
	alert("Birth date in invalid");
}

else {
	alert("Birth date is valid");
}

var input_info = window.prompt("Enter your zip code in either xxxxx or xxxxx-xxxx", "xxxxx");

if ( input_info.length === 5 && input_info.charAt(0) !== "x" ) {
	alert("Zip code is valid");
}

else if ( input_info.length === 10 && input_info.charAt(5) === "-" ) {
	alert("Zip code is valid");
}

else {
	alert("Zip code is invalid");
}



var input_info = window.prompt("Enter your state abbreviation: ", "");
var input_info_uppercase = input_info.toUpperCase();

if (input_info.length !== 2) {
	alert("Not a proper state abbreviation");
}

else if ( input_info !== input_info_uppercase ) {
	alert("Not a proper state abbreviation");
}

else {
	alert("You entered a valid state abbreviation");
}



var input_info = window.prompt("Are you married? Yes or No (capitalization doesn't matter) : ", "");
var input_info_uppercase = input_info.toUpperCase();



if ( input_info_uppercase === "YES" || input_info_uppercase === "NO" ) {
	if ( input_info_uppercase === "YES" ) {
		alert("You are married");
	}
	else {
		alert("You are not married");
	}
}
else {
	alert("You did not enter either yes or no");
}



var number_check = function (in_text) {

	for ( i = 0; i < in_text.length; i++ ) {
		num_test = in_text[i];
		if ( ( Number.isInteger(num_test) === false ) && ( (num_test !== "/") || (num_test !== "-") ) ) {
			return "You did not enter a number";
		}
	}

	return "Your entery was fine";
}

window.number_check = number_check;


