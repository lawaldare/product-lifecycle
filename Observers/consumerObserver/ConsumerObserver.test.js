const files = require('../../Handlers/files');

const consumerObserver1 = new files.ConsumerObserver();



test('creating an instance of a ConsumerObserver', () => {
  expect(consumerObserver1).toBeInstanceOf(files.ConsumerObserver);
})