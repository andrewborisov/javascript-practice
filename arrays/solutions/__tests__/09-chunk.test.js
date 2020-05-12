import { chunk } from '../09-chunk';

describe('solution of chunk function tests', () => {
  it('should return an array with chunks sized by 2', () => {
    const data = [1, 2, 3, 4, 5];

    expect(chunk(data, 2)).toEqual([[1, 2], [3, 4], [5]]);
  });
  it('should return an array with chunks sized by 3', () => {
    const data = [1, 2, 3, 4, 5];

    expect(chunk(data, 3)).toEqual([[1, 2, 3], [4, 5]]);
  });
  it('should return a new chunked array', () => {
    const data = [1, 2, 3, 4, 5];

    const result1 = chunk(data, 2);
    expect(result1 === data).toBe(false);
  });
});
