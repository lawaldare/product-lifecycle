const fs = require('fs');

const files = require('../../Handlers/files');

const recycler1 = new files.Recycler('Recycler', 'Fanta');


test('creating an instance of a Recycler', () => {
  expect(recycler1).toBeInstanceOf(files.Recycler);
})

test('append to file', () => {
			let product = 'Television';
      
      let result = `${product} has been given to the Consumer\n`;
      
      recycler1.go()
      
      fs.appendFileSync('testFile5', result);
      
      expect(fs.readFileSync('testFile5', 'utf8')).toBe(result);
      fs.unlinkSync('testFile5', 'utf8');
		});