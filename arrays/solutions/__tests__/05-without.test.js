import { without, without2 } from '../05-without';

describe('solution of without function tests', () => {
  it('should return an array without 1 and 2', () => {
    const data = [1, 2, 3, 1, 2];

    expect(without(data, 1, 2)).toEqual([3]);
    expect(without2(data, 1, 2)).toEqual([3]);
  });
  it('should return an array without "a"', () => {
    const data = ['a', 2, 3, 'a', 2];

    expect(without(data, 'a')).toEqual([2, 3, 2]);
    expect(without2(data, 'a')).toEqual([2, 3, 2]);
  });
  it('should return a new array without listed values', () => {
    const data = [1, 2, 3, 1, 2];

    const result1 = without(data, '1', '2');
    const result2 = without2(data, '1', '2');
    expect(result1 === data).toBe(false);
    expect(result2 === data).toBe(false);
  });
});
