const Consumer = require('./Consumer');



const Kazeem = new Consumer('Fanta');


test('creating an instance of a consumer', () => {
  expect(Kazeem).toBeInstanceOf(Consumer);
})