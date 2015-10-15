var s1 = 'string', //typeof string
  s2 = "string", //typeof string
  s3 = `string`, //typeof string
  n1 = 3, //typeof number
  n2 = 3.14, //typeof number
  b1 = true, //typeof boolean
  b2 = false, //typeof boolean
  u = undefined, //typeof undefined
  nu = null, //typeof object (silly error from the beginning)
  
  re1 = /ab/,
  re2 = /[db]/,

  ar1 = [],
  ar2 = [1, 2, 'three'];
  
  console.log(ar2[1]); //2
  
ar2['hello'] = world;

var person1 = {}; //typeof object

person1.firstName = 'Eddie';
person1.lastName = 'Gurnee';
person1.rank = 'Graduate Assistant';
person1.hoursOfSleepThisWeek = 10;

var person2 = {
  firstName: 'Eddie',
  lastName: 'Gurnee',
  rank: 'Graduate Assistant',
  hoursOfSleepThisWeek: 10
};


person2.sleepMore = function() {
	this.hoursOfSleepThisWeek++;
}

person1.sleepMore = sleep; //notice no ()

// person2.sleepMore();












