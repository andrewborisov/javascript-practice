import { unique } from '../06-unique';

describe('unique function tests', () => {
  it('should return a duplicate-free array [1, 2, 3]', () => {
    const data = [1, 2, 3, 1, 2];

    expect(unique(data)).toEqual([1, 2, 3]);
  });
  it('should return a duplicate-free array ["a", 2, 3]', () => {
    const data = ['a', 2, 3, 'a', 2];

    expect(unique(data)).toEqual(['a', 2, 3]);
  });
  it('should return a duplicate-free array [1, undefined, 2, 3]', () => {
    const data = [1, undefined, 2, 3, 1, 2, undefined];

    expect(unique(data)).toEqual([1, undefined, 2, 3]);
  });
  it('should return a new duplicate-free array', () => {
    const data = [1, 2, 3, 1, 2];

    const result1 = unique(data);
    expect(result1 === data).toBe(false);
  });
});
