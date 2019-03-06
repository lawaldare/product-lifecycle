const file = require('./files');

const fs = require('fs');

var data = fs.readFileSync('./database', 'utf8');

data = data.split('\n');
let id = 0;
let dataArray = [];

for (let i = 0; i < data.length; i++) {
	dataArray.push(data[i].split(' '));
}
 function getStarted(dataArray) {
	for (let product of dataArray) {
		product[2] ? product[2] : (product[2] = 'Producer');
		file.started([`${++id} ${product[0]}`], product[2], './output.txt');
	}
}	
	
		


getStarted(dataArray);

// for (var line of dataArray) {
// 		fs.appendFile('output', line + '\n', function(err) {
// 			if (err) throw new error();
// 		});
// 	}
