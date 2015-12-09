var body, r, c, row, col;

body = document.body;

var table = document.createElement('table');

for (r = 0; r < 3; r++) {
	row = document.createElement('tr');
	
	for (c = 0; c < 3; c++) {
		col = document.createElement('td');
		row.appendChild(col);
		col.innerHTML = `r:${r} c:${c}`;
	}
	
	table.appendChild(row);
}

body.appendChild(table);