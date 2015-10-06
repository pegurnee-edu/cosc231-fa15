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

// String
{
  var textHere = 'Some input text';
  var otherText = "More text here";
  var haxxor = `${textHere} interpolated!`;

  console.log(textHere);
  console.log(otherText);
  console.log(haxxor);
}

// Number
{
  var someNum = 3;
  var moreNum = 3.14;
  var yetMore = -Infinity; // or +Infinity, NaN

  console.log(someNum);
  console.log(moreNum);
  console.log(yetMore);
}

// Boolean
{
  var goForward = true;
  var goBack = !goForward;
  var goWhereEver = (goBack || true) && (goForward && !false);

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
