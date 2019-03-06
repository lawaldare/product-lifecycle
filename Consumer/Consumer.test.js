const Consumer = require('./Consumer');



const Kazeem = new Consumer('Fanta');


test('dare is stupid', () => {
  expect(Kazeem).toBeInstanceOf(Consumer);
})