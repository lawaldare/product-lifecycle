
//const Producer = require('./Producer');
const files = require('../files');

const producer1 = new files.Producer('producer', 'Fanta');


test('creating an instance of a Producer', () => {
  expect(producer1).toBeInstanceOf(files.Producer);
})

//console.log(files.Producer);