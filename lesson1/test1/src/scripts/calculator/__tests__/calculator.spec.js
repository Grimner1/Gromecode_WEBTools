import { sum, mult } from '../calculator';

it('проверка на прибасление', () => {
  expect(sum(2, 5)).toEqual(7);
});

it('проверка на умноежение', () => {
  expect(mult(7, 7)).toEqual(49);
});
