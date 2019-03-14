const file = require('./Handlers/files');

const stopper = require('./Handlers/stopper');

const fs = require('fs'); //requiring fs module

var data = fs.readFileSync('./Store/product', 'utf8'); //reading from the filtered file

data = data.split('\n');
let id = 0;
let dataArray = [];

for (let i = 0; i < data.length; i++) {
	// looping through each line of the string
	dataArray.push(data[i].split(' ')); // pushing it into an array so as to access the product and state
}
function getStarted(dataArray) {
	//this start the whole production
	for (let i = 0; i < dataArray.length; i++) {
		// looping through the array
		dataArray[i][2] ? dataArray[i][2] : (dataArray[i][2] = 'Producer');
		file.started([ `${++id} ${dataArray[i][0]} ${dataArray[i][1]}` ], dataArray[i][2], 'output.txt'); //destructuring the array so as to access the product and state
	}
	stopper === true; // it changes to true after the looping of the whole array.
}

getStarted(dataArray); //production starts here
