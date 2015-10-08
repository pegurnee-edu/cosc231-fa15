/*
 * As of ES6, there are 6 primative types:
 *
 * String
 * Number
 * Boolean
 * Null
 * Undefined
 * Symbol
 */

// const NUM_STUDENTS = 25;

// String
{
  var textHere = 'Some input text';
  var otherText = "More text here";
  var haxxor = `${textHere} interpolated!`;
  var newText = textHere + ' ' + otherText;
  var es6Text = `${textHere} ${otherText}`;

  console.log(textHere);
  console.log(otherText);
  console.log(haxxor);
  console.log(newText);
  console.log(es6Text);
  console.log(newText == es6Text);
  console.log(otherText.charAt(0));
  console.log(otherText[0]);
}

var someNum, moreNum, yetMore, seven, noSeven, five;
// Number
{
  someNum = 3;
  moreNum = 3.14;
  yetMore = -Infinity; // or +Infinity, NaN
  
  seven = Number('7');
  noSeven = Number('seven');
  five = Number('101b');
  
  console.log(someNum);
  console.log(moreNum);
  console.log(yetMore);
}

// Boolean
{
  var goForward = true;
  var goBack = !goForward;
  var goWhereEver = (goBack || true) && (goForward && !false);
  
  var truthinessOfNum = !!someNum;

  console.log(goForward);
  console.log(goBack);
  console.log(goWhereEver);
}

// Null
{
  var nada = null;
  var theBod = document.body;

  console.log(nada);
  console.log(theBod);
}

// Undefined
{
  var nil;

  console.log(nil);

  function logger(text) {
    console.log(text);
  }

  logger();
}









