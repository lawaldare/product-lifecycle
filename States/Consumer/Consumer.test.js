const fs = require('fs');

const files = require('../../Handlers/files');

const consumer1 = new files.Consumer('Consumer', 'Fanta');


test('creating an instance of a consumer', () => {
  expect(consumer1).toBeInstanceOf(files.Consumer);
})

test('append to file', () => {
			let product = 'Television';
      //new files.Producer(product);
      let result = `${product} has been given to the Recycler\n`;
      
      consumer1.go();
      
      fs.appendFileSync('testFile4', result);
      
      expect(fs.readFileSync('testFile4', 'utf8')).toBe(result);
      fs.unlinkSync('testFile4', 'utf8');
		});