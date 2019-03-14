const fs = require('fs');
let data;

fs.readFile('../Store/input', 'utf8', function(err, contents) { // reading from the input file
	data = contents.toString()
	.replace(/\t/gi, ' ')
	.replace(/[^\w \n]/gi, '')
	.replace(/ +/gi, ' ')
	.replace(/\n+/gi, '\n')
	.trim().split('\n')
	
	for (let product of data) {
		fs.appendFile('../Store/product', product + '\n', function(err) { //appending a cleaned products to a new file
			if (err) throw new error('There is a problem while reading the file');
		});
	}
});

c
