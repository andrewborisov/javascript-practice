import { isEqual, isEqual2 } from '../05-is-equal';

describe('solution of isEqual function tests', () => {
  const data = {
    a: 1,
    b: 2,
  };
  const data2 = {
    a: 1,
    b: 2,
  };
  const data3 = {
    a: 1,
    b: 3,
  };
  const data4 = {
    a: 1,
    c: 2,
  };
  const data5 = {
    a: 1,
  };
  const data6 = {
    e: undefined,
  };

  it('should return true, objects are equal', () => {
    expect(isEqual({}, {})).toBe(true);
    expect(isEqual(data, data2)).toBe(true);
    expect(isEqual2(data, data2)).toBe(true);
  });
  it('should return false, b: 2 !== b: 3', () => {
    expect(isEqual(data, data3)).toBe(false);
    expect(isEqual2(data, data3)).toBe(false);
  });
  it('should return false, b: 2 !== c: 2', () => {
    expect(isEqual(data, data4)).toBe(false);
    expect(isEqual2(data, data4)).toBe(false);
  });
  it('should return false, lacking "b" property', () => {
    expect(isEqual(data, data5)).toBe(false);
    expect(isEqual2(data, data5)).toBe(false);
  });
  it('should return false, objects completely different', () => {
    expect(isEqual(data, data6)).toBe(false);
    expect(isEqual2(data, data6)).toBe(false);
  });
});
