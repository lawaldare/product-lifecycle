const files = require('../../Handlers/files');

const retailer1 = new files.Retailer('Retailer', 'Fanta');


test('creating an instance of a Retailer', () => {
  expect(retailer1).toBeInstanceOf(files.Retailer);
})


test('append to file', () => {
			let product = 'Television';
      //new files.Producer(product);
      let result = `${product} has been given to the Consumer\n`;
      stopper = null;
      
      retailer1.go()
      
      fs.appendFileSync('testFile3', result);
      
      expect(fs.readFileSync('testFile3', 'utf8')).toBe(result);
      fs.unlinkSync('testFile3', 'utf8');
		});