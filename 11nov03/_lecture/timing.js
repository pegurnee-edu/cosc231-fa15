function $(selector) {
	if (selector.charAt(0) === '#') {
		return document.getElementById(selector.substring(1));
	}
}

var theDistance = 0,
	timers = [],
	moveRight = true;

var moveLogo = function() {
// 	var flashbox = document.getElementById('flashbox');
	var flashbox = $('#flashbox');
	
	if (moveRight && theDistance < 300) {
	
// 		theDistance = (theDistance + 10) % 300;
		theDistance += 10;
		flashbox.style.left = theDistance + 'px';
	} else if (theDistance > 11) {	
	
// 		theDistance = (theDistance + 10) % 300;
		theDistance -= 10;
		flashbox.style.left = theDistance + 'px';
		
		moveRight = false;
	} else {
		theDistance -= 10;
		flashbox.style.left = theDistance + 'px';
		
		moveRight = true;
	}
	
// 	setTimeout(moveLogo, 100);
};

var moveLogoLeft = function() {
// 	var flashbox = document.getElementById('flashbox');
	if (theDistance < 2000) {
		var flashbox = $('#flashbox');
	
		theDistance -= 1;
	
		flashbox.style.left = theDistance + 'px';
	}
	
// 	setTimeout(moveLogo, 100);
};

function timeoutHandler(fn, time) {
	if (theDistance < 2000) {
		fn();
		
// 		console.log('timeoutHandler(' + fn + ',' + time + ')');
		
// 		setTimeout('timeoutHandler(' + fn + ',' + time + ')' , time);
		
		setTimeout(function() { timeoutHandler(fn, time) } , time);
	}
}


function start() {
	timers.push(setInterval(moveLogo, 100));
}

function stop() {
	clearInterval(timers.pop());
}

function startLeft() {
	setInterval(moveLogoLeft, 100);
}





























