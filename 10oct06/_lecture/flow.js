if (textHere.length > 5) {
  console.log(`textHere: ${textHere} is long!`);
} else {
  console.log(`textHere: ${textHere} is short!`);
}

if (textHere[0] === 'S') {
  console.log(`textHere: ${textHere} starts with S!`);
} else {
  console.log(`textHere: ${textHere} does not start with S!`);
}

if (typeof someNum == 'number') {
  console.log(`someNum: ${someNum} is a number!`);
} else {
  console.log(`someNum: ${someNum} is not a number!`);
}

var sNumToStr = someNum.toString();
if (typeof sNumToStr == 'number') {
  console.log(`sNumToStr: ${sNumToStr} is a number!`);
} else {
  console.log(`sNumToStr: ${sNumToStr} is not a number!`);
}

var sNumAsStr = String(someNum);
if (typeof sNumAsStr == 'number') {
  console.log(`sNumAsStr: ${sNumAsStr} is a number!`);
} else {
  console.log(`sNumAsStr: ${sNumAsStr} is not a number!`);
}

if (someNum == 3) {
  console.log(`someNum: ${someNum} is 3!`);
} else {
  console.log(`someNum: ${someNum} is not 3!`);
}

if (someNum == '3') {
  console.log(`someNum: ${someNum} is close enough to '3'!`);
} else {
  console.log(`someNum: ${someNum} is not '3'!`);
}

if (someNum === '3') {
  console.log(`someNum: ${someNum} is strictly '3'!`);
} else {
  console.log(`someNum: ${someNum} is not '3'!`);
}

if (someNum === Number('3')) {
  console.log(`someNum: ${someNum} is strictly ${Number('3')}!`);
} else {
  console.log(`someNum: ${someNum} is not ${Number('3')}!`);
}

if (goForward) {
  console.log('The road goes ever on and on!');
} else {
  console.log('Do not pass `Go`, do not collect $200.');
}

if (someNum) {
  console.log('Eh, sure, that\'s good enough');
} else {
  console.log('Not good enough for me!');
}
