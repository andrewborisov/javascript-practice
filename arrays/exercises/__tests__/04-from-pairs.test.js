import { fromPairs } from '../04-from-pairs';

describe('fromPairs function tests', () => {
  it('should return an object with pairs', () => {
    const data = [['a', 1], ['b', '2'], ['c', undefined]];
    expect(fromPairs(data)).toEqual({ a: 1, b: '2', c: undefined });
  });
});
