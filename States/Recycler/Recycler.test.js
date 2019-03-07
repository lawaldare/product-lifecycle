const fs = require('fs');

const files = require('../../Handlers/files');

const recycler1 = new files.Recycler('Recycler', 'Fanta');


test('creating an instance of a Recycler', () => {
  expect(recycler1).toBeInstanceOf(files.Recycler);
})

test('append to file', () => {
			let product = 'Television';
      new files.Recycler(product);
      let result = `${product} has been given to the Producer\n`;
      fs.appendFileSync('testFile2', result);
			expect(fs.readFileSync('testFile2', 'utf8')).toBe(result);
		});