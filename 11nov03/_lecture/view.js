function display(someData) {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = someData.color;
  ctx.fillRect(10, 290, someData.width, someData.height);
  someData.getBigger();
}
