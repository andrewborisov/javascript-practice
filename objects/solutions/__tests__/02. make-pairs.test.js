import { makePairs, makePairs2, makePairs3 } from '../02-make-pairs';

describe('solution of makePairs function test', () => {
  it('should return deep array', () => {
    const data = {
      a: 1,
      b: 2,
      c: [3, 4],
    };

    expect(makePairs(data)).toEqual([['a', 1], ['b', 2], ['c', [3, 4]]]);
    expect(makePairs2(data)).toEqual([['a', 1], ['b', 2], ['c', [3, 4]]]);
    expect(makePairs3(data)).toEqual([['a', 1], ['b', 2], ['c', [3, 4]]]);
  });
  it('should return deep array', () => {
    const data = {
      a: 1,
      b: undefined,
      c: {
        a: 1,
      },
    };

    expect(makePairs(data)).toEqual([['a', 1], ['b', undefined], ['c', { a: 1 }]]);
    expect(makePairs2(data)).toEqual([['a', 1], ['b', undefined], ['c', { a: 1 }]]);
    expect(makePairs3(data)).toEqual([['a', 1], ['b', undefined], ['c', { a: 1 }]]);
  });
  it('should return deep array', () => {
    const data = {
      a: null,
      b: NaN,
      c: '3',
    };

    expect(makePairs(data)).toEqual([['a', null], ['b', NaN], ['c', '3']]);
    expect(makePairs2(data)).toEqual([['a', null], ['b', NaN], ['c', '3']]);
    expect(makePairs3(data)).toEqual([['a', null], ['b', NaN], ['c', '3']]);
  });
});
