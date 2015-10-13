// hey this is a comment
/*
if (window.navigator.userAgent.match('Safari')) {
	document.write('stop using safari');
}

var re1 = 'sdf',
	re2 = "sdf",
	re3 = `sdf`,
	re4 = /sdf/,
	item = "",
	didMatch = false;

for (; !didMatch;) {
	item = prompt('Enter a string', '');
	didMatch = re4.test(item);
	console.log(re4.exec(item));
// 	console.log(item.match(re3));
}
*/

function validatePhone(phoneNum) {
// 	var phRe = /^(\(?[2-9]\d{2}\)?(-| )?)?\d{3}(-| )?\d{4}$/;
	const START = '(\(?[2-9]\d{2}\)?(-| )?)?';
	var end = '\d{3}(-| )?\d{4}';
	
	var re = new Regex(start+end);
	
	var o = start+end;
	
	
	console.log(phRe.exec(phoneNum));
	
	if (phRe.test(phoneNum)) {
		document.body.style.backgroundColor = "green";
	} else {
		document.body.style.backgroundColor = "red";
	}
}










