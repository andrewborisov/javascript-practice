import { isEqualDeep } from '../08-is-equal-deep';

describe('solution of isEqualDeep function tests', () => {
  it('should return true, empty objects are equal', () => {
    expect(isEqualDeep({}, {})).toBe(true);
  });
  it('should return true, plain objects are equal', () => {
    const data = {
      a: 1,
      b: 2,
      c: 3,
      e: '4',
    };
    const data2 = {
      a: 1,
      b: 2,
      c: 3,
      e: '4',
    };

    expect(isEqualDeep(data, data2)).toBe(true);
  });
  it('should return true, objects with empty values are equal', () => {
    const data = {
      a: {
        b: {},
        c: 1,
      },
    };
    const data2 = {
      a: {
        b: {},
        c: 1,
      },
    };

    expect(isEqualDeep(data, data2)).toBe(true);
  });
  it('should return true, objects with nested values are equal', () => {
    const data = {
      a: {
        b: 1,
        c: 2,
      },
      b: {
        c: {
          d: 2,
          e: 3,
        },
      },
    };
    const data2 = {
      a: {
        b: 1,
        c: 2,
      },
      b: {
        c: {
          d: 2,
          e: 3,
        },
      },
    };

    expect(isEqualDeep(data, data2)).toBe(true);
  });
  it('should return true, objects with empty arrays are equal', () => {
    const data = {
      a: {
        b: [],
        c: 1,
      },
    };
    const data2 = {
      a: {
        b: [],
        c: 1,
      },
    };

    expect(isEqualDeep(data, data2)).toBe(true);
  });
  it('should return true, objects with equal arrays are equal', () => {
    const data = {
      a: {
        b: [1, 2, 3],
      },
    };
    const data2 = {
      a: {
        b: [1, 2, 3],
      },
    };

    expect(isEqualDeep(data, data2)).toBe(true);
  });
  it('should return false, objects with different arrays', () => {
    const data = {
      a: {
        b: [1, 2, 3],
      },
    };
    const data2 = {
      a: {
        b: [1, 3, 2],
      },
    };

    expect(isEqualDeep(data, data2)).toBe(false);
  });
  it('should return true, values with arrays are equal', () => {
    const data = {
      a: {
        b: [1, 2, 3, [1, 2, 3]],
      },
    };
    const data2 = {
      a: {
        b: [1, 2, 3, [1, 2, 3]],
      },
    };

    expect(isEqualDeep(data, data2)).toBe(true);
  });
  it('should return false, values with arrays are different', () => {
    const data = {
      a: {
        b: [1, 2, 3, [2, 8, 2]],
      },
    };
    const data2 = {
      a: {
        b: [1, 2, 3, [2, 2, 8]],
      },
    };

    expect(isEqualDeep(data, data2)).toBe(false);
  });
  it('should return true, values with objects are equal', () => {
    const data = {
      a: {
        b: [1, 2, 3, { a: 1 }],
      },
    };
    const data2 = {
      a: {
        b: [1, 2, 3, { a: 1 }],
      },
    };

    expect(isEqualDeep(data, data2)).toBe(true);
  });
  it('should return true, objects are equal', () => {
    const data = {
      a: {
        b: [1, 2, 3],
      },
      b: null,
      c: undefined,
      e: {
        a: NaN,
      },
      f: {
        a: 1,
      },
    };
    const data2 = {
      a: {
        b: [1, 2, 3],
      },
      b: null,
      c: undefined,
      e: {
        a: NaN,
      },
      f: {
        a: 1,
      },
    };

    expect(isEqualDeep(data, data2)).toBe(true);
  });
  it('should return false, different values in the objects', () => {
    const data = {
      a: {
        b: {
          a: 1,
          b: 2,
        },
      },
    };
    const data2 = {
      a: {
        b: {
          a: 2,
          b: 3,
        },
      },
    };

    expect(isEqualDeep(data, data2)).toBe(false);
  });
  it('should return false, different keys in the objects', () => {
    const data = {
      a: {
        b: {
          a: 1,
          b: 2,
        },
      },
    };
    const data2 = {
      a: {
        b: {
          c: 1,
          d: 2,
        },
      },
    };

    expect(isEqualDeep(data, data2)).toBe(false);
  });
  it('should return false, different length of the arrays', () => {
    const data = {
      a: {
        b: [1, 2, 3],
      },
    };
    const data2 = {
      a: {
        b: [1, 2],
      },
    };

    expect(isEqualDeep(data, data2)).toBe(false);
  });
  it('should return false, different values in the arrays', () => {
    const data = {
      a: {
        b: [1, 2, 3],
      },
    };
    const data2 = {
      a: {
        b: [1, 2, 4],
      },
    };

    expect(isEqualDeep(data, data2)).toBe(false);
  });
});
