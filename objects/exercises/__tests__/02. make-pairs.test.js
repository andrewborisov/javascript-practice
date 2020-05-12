import { makePairs } from '../02-make-pairs';

describe('makePairs function test', () => {
  it('should return deep array', () => {
    const data = {
      a: 1,
      b: 2,
      c: [3, 4],
    };

    expect(makePairs(data)).toEqual([['a', 1], ['b', 2], ['c', [3, 4]]]);
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
  });
  it('should return deep array', () => {
    const data = {
      a: null,
      b: NaN,
      c: '3',
    };

    expect(makePairs(data)).toEqual([['a', null], ['b', NaN], ['c', '3']]);
  });
});
