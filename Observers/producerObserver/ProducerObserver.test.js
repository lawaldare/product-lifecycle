
const files = require('../../Handlers/files');

const producerObserver1 = new files.ProducerObserver();



test('creating an instance of a ProducerObserver', () => {
  expect(producerObserver1).toBeInstanceOf(files.ProducerObserver);
})

