var theData = {
  color: 'red',
  width: 280,
  height: 10
};

theData.getBigger = function() {
  this.height = (this.height + 10) % 200;
};
