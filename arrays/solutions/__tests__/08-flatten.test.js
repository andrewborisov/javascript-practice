import { flatten } from '../08-flatten';

describe('solution of flatten function tests', () => {
  it('should make an array flat', () => {
    const data = [1, 2, [3, 4, [5]]];

    expect(flatten(data)).toEqual([1, 2, 3, 4, 5]);
  });
  it('should return a new flattened array', () => {
    const data = [1, 2, [3, 4, [5]]];

    const result1 = flatten(data);
    expect(result1 === data).toBe(false);
  });
});
