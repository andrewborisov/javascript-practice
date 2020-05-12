import { reverse, reverse2 } from '../02-reverse';

describe('solution of reverse function tests', () => {
  it('[1, 2, 3, 4, 5] -> [5, 4, 3, 2, 1]', () => {
    const data = [1, 2, 3, 4, 5];

    expect(reverse(data)).toEqual([5, 4, 3, 2, 1]);
    expect(reverse2(data)).toEqual([5, 4, 3, 2, 1]);
  });
  it('[1, 2, 3, [1, 2]] -> [[1, 2], 3, 2, 1]', () => {
    const data = [1, 2, 3, [1, 2]];

    expect(reverse(data)).toEqual([[1, 2], 3, 2, 1]);
    expect(reverse2(data)).toEqual([[1, 2], 3, 2, 1]);
  });
  it('[1, 2, 3, { a: 1 }] -> [{ a: 1 }, 3, 2, 1]', () => {
    const data = [1, 2, 3, { a: 1 }];

    expect(reverse(data)).toEqual([{ a: 1 }, 3, 2, 1]);
    expect(reverse2(data)).toEqual([{ a: 1 }, 3, 2, 1]);
  });
  it('should return a new reversed array', () => {
    const data = [1, 2, 3, 4, 5];

    const result1 = reverse(data);
    const result2 = reverse(data);
    expect(result1 === data).toBe(false);
    expect(result2 === data).toBe(false);
  });
});
