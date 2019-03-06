
const Producer = require('./Producer');


const producer1 = new Producer('producer', 'Fanta');


test('creating an instance of a Producer', () => {
  expect(producer1).toBeInstanceOf(Producer);
})