const fs = require('fs');

const files = require('../../Handlers/files');

const producer1 = new files.Producer('producer', 'Fanta');


test('creating an instance of a Producer', () => {
  expect(producer1).toBeInstanceOf(files.Producer);
})

test('append to file', () => {
			let product = 'Television';
      new files.Producer(product);
      let result = `${product} has been given to the Retailer\n`;
      fs.appendFileSync('testFile1', result);
			expect(fs.readFileSync('testFile1', 'utf8')).toBe(result);
		});