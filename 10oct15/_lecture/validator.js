var validator = {
	regexes: [/^(\(?[2-9]\d{2}\)?(-| )?)?\d{3}(-| )?\d{4}$/] ,
	
	isPhone: function(testString) {
		return this.regexes[0].test(testString);
	},
	isEmail: function() {},
	
	isA: function(testString, someSortOfRegex) {
		return someSortOfRegex.test(testString);
	}
};