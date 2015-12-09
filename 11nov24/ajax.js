function getData() {
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			var incoming = JSON.parse(xhttp.responseText);
			
			alert(incoming.name.first);
		}
	};
	
//   	xhttp.open("GET", "info.json");
	xhttp.open("GET", "info.json");
  	xhttp.send();
}

function $getData() {
	$.get("info.json", function(data, blah, xhr) {
		alert(xhr.responseText);
	});
}

function $loadRest() {
	$('#target').load('loader.html');
}








