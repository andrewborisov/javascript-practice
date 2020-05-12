import { isEmptyDeep } from '../07-is-empty-deep';

describe('solution of isEmptyDeep function test', () => {
  it('should return false, objects has primitive values', () => {
    const data = { a: 0 };
    const data2 = { a: 1 };
    const data3 = { a: '1' };
    const data4 = { a: true };
    const data5 = { a: false };
    const data6 = { a: 1, b: undefined };

    expect(isEmptyDeep(data)).toBe(false);
    expect(isEmptyDeep(data2)).toBe(false);
    expect(isEmptyDeep(data3)).toBe(false);
    expect(isEmptyDeep(data4)).toBe(false);
    expect(isEmptyDeep(data5)).toBe(false);
    expect(isEmptyDeep(data6)).toBe(false);
  });
  it('should return false, deep objects has primitive values', () => {
    const deepObject = { a: { b: 0 } };
    const deepObject2 = { a: { b: 1 } };
    const deepObject3 = { a: { b: '1' } };
    const deepObject4 = { a: { b: true } };
    const deepObject5 = { a: { b: false } };
    const deepObject6 = { a: { b: undefined, c: 1 } };

    expect(isEmptyDeep(deepObject)).toBe(false);
    expect(isEmptyDeep(deepObject2)).toBe(false);
    expect(isEmptyDeep(deepObject3)).toBe(false);
    expect(isEmptyDeep(deepObject4)).toBe(false);
    expect(isEmptyDeep(deepObject5)).toBe(false);
    expect(isEmptyDeep(deepObject6)).toBe(false);
  });
  it('should return true, {} is empty', () => {
    const data = {};

    expect(isEmptyDeep(data)).toBe(true);
  });
  it('should return true, objects with null, NaN, undefined, empty string, [], {}', () => {
    const data = { a: null };
    const data2 = { a: NaN };
    const data3 = { a: undefined };
    const data4 = { a: '' };
    const data5 = { a: {} };
    const data6 = { a: [] };

    expect(isEmptyDeep(data)).toBe(true);
    expect(isEmptyDeep(data2)).toBe(true);
    expect(isEmptyDeep(data3)).toBe(true);
    expect(isEmptyDeep(data4)).toBe(true);
    expect(isEmptyDeep(data5)).toBe(true);
    expect(isEmptyDeep(data6)).toBe(true);
  });
  it('should return true, objects with child object null, NaN, undefined, empty string, [], {}', () => {
    const data = { a: { b: null } };
    const data2 = { a: { b: NaN } };
    const data3 = { a: { b: undefined } };
    const data4 = { a: { b: '' } };
    const data5 = { a: { b: {} } };
    const data6 = { a: { b: [] } };

    expect(isEmptyDeep(data)).toBe(true);
    expect(isEmptyDeep(data2)).toBe(true);
    expect(isEmptyDeep(data3)).toBe(true);
    expect(isEmptyDeep(data4)).toBe(true);
    expect(isEmptyDeep(data5)).toBe(true);
    expect(isEmptyDeep(data6)).toBe(true);
  });
  it('should return false, objects has arrays with primitive values ', () => {
    const data = { a: [0] };
    const data2 = { a: [1] };
    const data3 = { a: ['1'] };
    const data4 = { a: [false] };
    const data5 = { a: [true] };
    const data6 = { a: [undefined, 1] };
    const data7 = { a: [null, '1'] };
    const data8 = { a: [NaN, true] };

    expect(isEmptyDeep(data)).toBe(false);
    expect(isEmptyDeep(data2)).toBe(false);
    expect(isEmptyDeep(data3)).toBe(false);
    expect(isEmptyDeep(data4)).toBe(false);
    expect(isEmptyDeep(data5)).toBe(false);
    expect(isEmptyDeep(data6)).toBe(false);
    expect(isEmptyDeep(data7)).toBe(false);
    expect(isEmptyDeep(data8)).toBe(false);
  });
  it('should return false, objects has deep arrays with values ', () => {
    const data = { a: [[0]] };
    const data2 = { a: [[1]] };
    const data3 = { a: [['1']] };
    const data4 = { a: [[false]] };
    const data5 = { a: [[true]] };
    const data6 = { a: [[undefined, 1]] };
    const data7 = { a: [[null, '1']] };
    const data8 = { a: [[NaN, true]] };
    const data9 = { a: [[0], undefined] };
    const data10 = { a: [{ a: 1 }] };
    const data11 = { a: [{ a: [1] }] };

    expect(isEmptyDeep(data)).toBe(false);
    expect(isEmptyDeep(data2)).toBe(false);
    expect(isEmptyDeep(data3)).toBe(false);
    expect(isEmptyDeep(data4)).toBe(false);
    expect(isEmptyDeep(data5)).toBe(false);
    expect(isEmptyDeep(data6)).toBe(false);
    expect(isEmptyDeep(data7)).toBe(false);
    expect(isEmptyDeep(data8)).toBe(false);
    expect(isEmptyDeep(data9)).toBe(false);
    expect(isEmptyDeep(data10)).toBe(false);
    expect(isEmptyDeep(data11)).toBe(false);
  });
  it('should return true, objects has arrays with NaN, null, undefined, [], {}', () => {
    const data = { a: [undefined] };
    const data2 = { a: [''] };
    const data3 = { a: [null] };
    const data4 = { a: [NaN] };
    const data5 = { a: [[]] };
    const data6 = { a: [{}] };
    const data7 = { a: [{ a: undefined }] };
    const data8 = { a: [{ a: [] }] };

    expect(isEmptyDeep(data)).toBe(true);
    expect(isEmptyDeep(data2)).toBe(true);
    expect(isEmptyDeep(data3)).toBe(true);
    expect(isEmptyDeep(data4)).toBe(true);
    expect(isEmptyDeep(data5)).toBe(true);
    expect(isEmptyDeep(data6)).toBe(true);
    expect(isEmptyDeep(data7)).toBe(true);
    expect(isEmptyDeep(data8)).toBe(true);
  });
  it('should return true, objects has deep arrays with NaN, null, undefined, [], {}', () => {
    const data = { a: [[undefined]] };
    const data2 = { a: [['']] };
    const data3 = { a: [[null]] };
    const data4 = { a: [[NaN]] };
    const data5 = { a: [[[]]] };
    const data6 = { a: [[{}]] };
    const data7 = { a: [[{ a: null }]] };
    const data8 = { a: [[{ a: [''] }]] };

    expect(isEmptyDeep(data)).toBe(true);
    expect(isEmptyDeep(data2)).toBe(true);
    expect(isEmptyDeep(data3)).toBe(true);
    expect(isEmptyDeep(data4)).toBe(true);
    expect(isEmptyDeep(data5)).toBe(true);
    expect(isEmptyDeep(data6)).toBe(true);
    expect(isEmptyDeep(data7)).toBe(true);
    expect(isEmptyDeep(data8)).toBe(true);
  });
});
