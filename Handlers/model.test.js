const files = require('./files');

const model = new files.ObserverModel();

const producerObserver = new files.ProducerObserver();

model.registerObserver('Producer', producerObserver);

test('creating an instance of a Model', () => {
  expect(model).toBeInstanceOf(files.ObserverModel);
});


test('observer model notifying all the observers', () => {
  // mo.notifyAll('Producer', 'Fanta');
  expect(model.notifyAll('Producer', 'Fanta').toBe())
})

