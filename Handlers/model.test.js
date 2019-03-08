const files = require('./files');

const mo = new files.Model();

const producerObserver1 = new file.ProducerObserver();

mo.registerObserver('Producer', producerObserver1);

test('creating an instance of a Model', () => {
  expect(mo).toBeInstanceOf(files.Model);
});


test('observer model notifying all the observers', () => {
  // mo.notifyAll('Producer', 'Fanta');
  expect(mo.notifyAll('Producer', 'Fanta').toBe())
})

