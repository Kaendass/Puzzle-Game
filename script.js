function placement() {
	var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ''];
	for (var i = numbers.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = numbers[i];
		numbers[i] = numbers[j];
		numbers[j] = temp;
	}

	var counter = 0;
	var index;
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			index = 'cell' + i + j;
			document.getElementById(index).innerHTML = numbers[counter];
			counter++;
		}
	}
}
var move_counter = 0;
var enable = true;
function move(row, col) {
	if (enable) {
		var top = row - 1;
		var bottom = row + 1;
		var left = col - 1;
		var right = col + 1;

		if (
			row != 0 &&
			document.getElementById('cell' + top + col).innerHTML == ''
		) {
			var cell_value = document.getElementById('cell' + row + col).innerHTML;
			var new_cell_value = document.getElementById(
				'cell' + top + col
			).innerHTML;
			document.getElementById('cell' + top + col).innerHTML = cell_value;
			document.getElementById('cell' + row + col).innerHTML = new_cell_value;
			move_counter++;
			document.getElementById('move_count').innerHTML =
				'Number of Moves: ' + move_counter;
		} else if (
			row != 3 &&
			document.getElementById('cell' + bottom + col).innerHTML == ''
		) {
			var cell_value = document.getElementById('cell' + row + col).innerHTML;
			var new_cell_value = document.getElementById(
				'cell' + bottom + col
			).innerHTML;
			document.getElementById('cell' + bottom + col).innerHTML = cell_value;
			document.getElementById('cell' + row + col).innerHTML = new_cell_value;
			move_counter++;
			document.getElementById('move_count').innerHTML =
				'Number of Moves: ' + move_counter;
		} else if (
			col != 0 &&
			document.getElementById('cell' + row + left).innerHTML == ''
		) {
			var cell_value = document.getElementById('cell' + row + col).innerHTML;
			var new_cell_value = document.getElementById(
				'cell' + row + left
			).innerHTML;
			document.getElementById('cell' + row + left).innerHTML = cell_value;
			document.getElementById('cell' + row + col).innerHTML = new_cell_value;
			move_counter++;
			document.getElementById('move_count').innerHTML =
				'Number of Moves: ' + move_counter;
		} else if (
			col != 3 &&
			document.getElementById('cell' + row + right).innerHTML == ''
		) {
			var cell_value = document.getElementById('cell' + row + col).innerHTML;
			var new_cell_value = document.getElementById(
				'cell' + row + right
			).innerHTML;
			document.getElementById('cell' + row + right).innerHTML = cell_value;
			document.getElementById('cell' + row + col).innerHTML = new_cell_value;
			move_counter++;
			document.getElementById('move_count').innerHTML =
				'Number of Moves: ' + move_counter;
		}
		finish();
	}
}

function reset() {
	move_counter = 0;
	document.getElementById('move_count').innerHTML =
		'Number of Moves: ' + move_counter;
	placement();
	enable = true;
	document.getElementById('welcome').innerHTML = 'Puzzle Game';
}

counter = 0;
function finish() {
	for (i = 0; i < 4; i++) {
		if (document.getElementById('cell0' + i).innerHTML == i + 1) {
			counter++;
		}
		if (document.getElementById('cell1' + i).innerHTML == i + 5) {
			counter++;
		}
		if (document.getElementById('cell2' + i).innerHTML == i + 9) {
			counter++;
		}
		if (document.getElementById('cell3' + i).innerHTML == i + 13) {
			counter++;
		}
	}
	if (counter == 15) {
		document.getElementById('welcome').innerHTML = 'You win!';
		enable = false;
	}
	console.log(counter);
	counter = 0;
}
toggle = false;
function bg() {
	if (toggle) {
		document.querySelector('table').style.backgroundColor = 'transparent';
		toggle = false;
	} else {
		document.querySelector('table').style.backgroundColor = 'white';
		toggle = true;
	}
}

placement();
finish();
