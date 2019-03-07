const files = require('../../Handlers/files');

const retailer1 = new files.Retailer('Retailer', 'Fanta');


test('creating an instance of a Retailer', () => {
  expect(retailer1).toBeInstanceOf(files.Retailer);
})