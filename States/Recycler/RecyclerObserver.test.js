const files = require('../../Handlers/files');

const recyclerObserver1 = new files.RecyclerObserver();



test('creating an instance of a RecyclerObserver', () => {
  expect(recyclerObserver1).toBeInstanceOf(files.RecyclerObserver);
})