var Validator {
	regexes: [/\s+/, /\w+/],
	checkWord: function(str) {
		return this.regexes[1].match(str);
	}
}

function createValidator() {
	var validator = {};
	
	validator.regexes = [/\s+/, /\w+/];
	validator.checkWord = function(str) {
		return this.regexes[1].match(str);
	};
	
	return validator;
}

var ourValidator = createValidator();

var Validator = function(myRegexes) {
	this.regexes = myRegexes;
	this.checkWord = function(str) {
		return this.regexes[1].match(str);
	};
}

var ourRealValidator = new Validator([/\s+/, /\w+/]);
ourRealValidator.checkWord('someword');




















