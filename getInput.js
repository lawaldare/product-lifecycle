const fs = require('fs');
var data;

fs.readFile('product', 'utf8', function(err, contents) {
	data = contents.toString();
	data = data.replace(/\t/gi, ' ');
	data = data.replace(/[^\w \n]/gi, '');
	data = data.replace(/ +/gi, ' ');
	data = data.replace(/\n+/gi, '\n');
	data = data.trim().split('\n');
	//console.log(data);
	for (var a of data) {
		fs.appendFile('database', a + '\n', function(err) {
			if (err) throw new error();
		});
	}
});
