// function colorBlue() {
//   var items = document.getElementsByTagName('p');
// //   items[20] = 'data';
// 
// // 	for (var i = 0; i < items.length; i++ {
// // 		items[i].style.color = 'blue';
// // 	}
// 
//   for (var item of items) {
//     item.style.color = 'blue';
//   }
// }

function colorRed() {
	var items = document.querySelectorAll('p, footer');
	
  for (var item of items) {
    item.style.color = 'red';
  }
  
  var greenNodes = document.querySelectorAll('.green');
   
   for (var e of greenNodes) {
    e.style.color = 'green';
  }
}






