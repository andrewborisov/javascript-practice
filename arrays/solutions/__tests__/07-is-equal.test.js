import { isEqual } from '../07-is-equal';

describe('solution of isEqual function tests', () => {
  it('should return true, arrays are identical', () => {
    const data = [1, 2, 3];
    const data2 = [1, 2, 3];

    expect(isEqual(data, data2)).toEqual(true);
  });
  it('should return false, different values', () => {
    const data = [1, 2, 3];
    const data2 = [1, 2, 4];

    expect(isEqual(data, data2)).toEqual(false);
    expect(isEqual(data2, data)).toEqual(false);
  });
  it('should return false, different length', () => {
    const data = [1, 2, 3];
    const data2 = [1, 2];

    expect(isEqual(data, data2)).toEqual(false);
    expect(isEqual(data2, data)).toEqual(false);
  });
  it('should return false, different order', () => {
    const data = [1, 3, 2];
    const data2 = [1, 2, 3];

    expect(isEqual(data, data2)).toEqual(false);
    expect(isEqual(data2, data)).toEqual(false);
  });
});
