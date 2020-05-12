import { invoke } from '../06-invoke';

describe('solution of invoke function tests', () => {
  it('pass array method splice', () => {
    const data = {
      a: {
        b: [1, 2, 3],
      },
    };

    expect(invoke(data, 'a.b', 'splice', [1, 3])).toEqual([2, 3]);
    expect(data).toEqual({
      a: {
        b: [1],
      },
    });
  });
  it('pass array method pop', () => {
    const data = {
      a: {
        b: [1, 2, 3],
      },
    };

    expect(invoke(data, 'a.b', 'pop')).toBe(3);
    expect(data).toEqual({
      a: {
        b: [1, 2],
      },
    });
  });
  it('pass array method pop', () => {
    const data = {
      a: {
        b: [1, 2, 3],
      },
    };

    expect(invoke(data, 'a.b', 'slice', [0, 1])).toEqual([1]);
    expect(data).toEqual({
      a: {
        b: [1, 2, 3],
      },
    });
  });
});
