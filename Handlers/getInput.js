const fs = require('fs');
var data;

fs.readFile('../Database/product', 'utf8', function(err, contents) { // reading from the product file
	data = contents.toString();
	data = data.replace(/\t/gi, ' ');
	data = data.replace(/[^\w \n]/gi, '');
	data = data.replace(/ +/gi, ' ');
	data = data.replace(/\n+/gi, '\n');
	data = data.trim().split('\n');
	//console.log(data);
	for (var a of data) {
		fs.appendFile('../Database/database', a + '\n', function(err) { //appending a cleaned products to a new file
			if (err) throw new error();
		});
	}
});
