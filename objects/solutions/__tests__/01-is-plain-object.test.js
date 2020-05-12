import { isPlainObject } from '../01-is-plain-object';

describe('solution of isPlainObject function tests', () => {
  it('{} is plain object === true', () => {
    expect(isPlainObject({})).toBe(true);
  });
  it('{ a: 1 } is plain object === true', () => {
    expect(isPlainObject({ a: 1 })).toBe(true);
  });
  it('[1, 2, 3] is not plain object === false', () => {
    expect(isPlainObject([1, 2, 3])).toBe(false);
  });
  it('null is not plain object === false', () => {
    expect(isPlainObject(null)).toBe(false);
  });
  it('undefined is not plain object === false', () => {
    expect(isPlainObject(undefined)).toBe(false);
  });
  it('NaN is not plain object === false', () => {
    expect(isPlainObject(NaN)).toBe(false);
  });
  it('1 is not plain object === false', () => {
    expect(isPlainObject(1)).toBe(false);
  });
  it('"1" is not plain object === false', () => {
    expect(isPlainObject('1')).toBe(false);
  });
  it('() => {} is not plain object === false', () => {
    expect(isPlainObject(() => {})).toBe(false);
  });
  it('class is not plain object === false', () => {
    expect(isPlainObject(class Test {})).toBe(false);
  });
});
