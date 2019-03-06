const file = require('./files');

const stopper = require('./check');

const fs = require('fs');

var data = fs.readFileSync('./database', 'utf8');

data = data.split('\n');
let id = 0;
let dataArray = [];

for (let i = 0; i < data.length; i++) {
	dataArray.push(data[i].split(' '));
}
 function getStarted(dataArray) {
	for (let i = 0; i < dataArray.length; i++) {
		dataArray[i][2] ? dataArray[i][2] : (dataArray[i][2] = 'Producer');
		file.started([`${++id} ${dataArray[i][0]}`], dataArray[i][2], './output.txt');
	}

	stopper == true;
}	
	
		


getStarted(dataArray);
