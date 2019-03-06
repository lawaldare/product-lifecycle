const file = require('./files');

const fs = require('fs');

var data = fs.readFileSync('./database', 'utf8');

data = data.split('\n');

let dataArray = [];

for (let i = 0; i < data.length; i++) {
	dataArray.push(data[i].split(' '));
}
async function getStarted(dataArray) {
	for (let product of dataArray) {
		product[2] ? product[2] : (product[2] = 'Producer');
		file.started(product[0], product[2]);
	}
}

getStarted(dataArray);
