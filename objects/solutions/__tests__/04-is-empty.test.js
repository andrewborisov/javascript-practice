import { isEmpty } from '../04-is-empty';

describe('solution of isEmpty function test', () => {
  it('should return false, objects has primitive values', () => {
    const data = { a: 0 };
    const data2 = { a: 1 };
    const data3 = { a: '1' };
    const data4 = { a: true };
    const data5 = { a: false };
    const data6 = { a: 1, b: undefined };

    expect(isEmpty(data)).toBe(false);
    expect(isEmpty(data2)).toBe(false);
    expect(isEmpty(data3)).toBe(false);
    expect(isEmpty(data4)).toBe(false);
    expect(isEmpty(data5)).toBe(false);
    expect(isEmpty(data6)).toBe(false);
  });
  it('should return true, {} is empty', () => {
    const data = {};

    expect(isEmpty(data)).toBe(true);
  });
  it('should return false, shallow check, so [] and {} counts as not empty', () => {
    const data = { a: {} };
    const data2 = { a: [] };

    expect(isEmpty(data)).toBe(false);
    expect(isEmpty(data2)).toBe(false);
  });
  it('should return true, objects with null, NaN, undefined, empty string, [], {}', () => {
    const data = { a: null };
    const data2 = { a: NaN };
    const data3 = { a: undefined };
    const data4 = { a: '' };

    expect(isEmpty(data)).toBe(true);
    expect(isEmpty(data2)).toBe(true);
    expect(isEmpty(data3)).toBe(true);
    expect(isEmpty(data4)).toBe(true);
  });
});
