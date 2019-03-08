const files = require('../../Handlers/files');

const retailerObserver1 = new files.RetailerObserver();



test('creating an instance of a RetailerObserver', () => {
  expect(retailerObserver1).toBeInstanceOf(files.RetailerObserver);
})