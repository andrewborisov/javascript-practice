import { intersectionDeep } from '../10-intersection-deep';

describe('intersectionDeep function tests', () => {
  it('should return { b: 2 }', () => {
    const firstObject = {
      a: 1,
      b: 2,
    };
    const secondObject = {
      b: 2,
      c: 3,
    };

    expect(intersectionDeep(firstObject, secondObject)).toEqual({ b: 2 });
  });
  it('should return { b: 2, c: 3 }', () => {
    const firstObject = {
      a: 1,
      b: 2,
      c: 3,
    };
    const secondObject = {
      b: 2,
      c: 3,
      e: null,
    };

    expect(intersectionDeep(firstObject, secondObject)).toEqual({ b: 2, c: 3 });
  });
  it('should return { b: { c: 2 } }', () => {
    const firstObject = {
      a: 1,
      b: {
        c: 2,
      },
      e: 3,
    };
    const secondObject = {
      b: {
        c: 2,
      },
      e: 4,
      f: null,
    };

    expect(intersectionDeep(firstObject, secondObject)).toEqual({ b: { c: 2 } });
  });
  it('should return { b: { c: [1, 2] } }', () => {
    const firstObject = {
      a: 1,
      b: {
        c: [1, 2],
      },
      e: 3,
    };
    const secondObject = {
      b: {
        c: [1, 2],
      },
      e: 4,
      f: null,
    };

    expect(intersectionDeep(firstObject, secondObject)).toEqual({ b: { c: [1, 2] } });
  });
  it('should return {}, first array deep', () => {
    const firstObject = {
      a: 1,
      b: {
        c: [[1], 2],
      },
      e: 3,
    };
    const secondObject = {
      b: {
        c: [1, 2],
      },
      e: 4,
      f: null,
    };

    expect(intersectionDeep(firstObject, secondObject)).toEqual({});
  });
  it('should return { b: { c: [[1], 2] }}', () => {
    const firstObject = {
      a: 1,
      b: {
        c: [[1], 2],
      },
      e: 3,
    };
    const secondObject = {
      b: {
        c: [[1], 2],
      },
      e: 4,
      f: null,
    };

    expect(intersectionDeep(firstObject, secondObject)).toEqual({ b: { c: [[1], 2] } });
  });
  it('should return { b: { c: [{ a: 1 }, 2] }}', () => {
    const firstObject = {
      a: 1,
      b: {
        c: [{ a: 1 }, 2],
      },
      e: 3,
    };
    const secondObject = {
      b: {
        c: [{ a: 1 }, 2],
      },
      e: 4,
      f: null,
    };

    expect(intersectionDeep(firstObject, secondObject)).toEqual({ b: { c: [{ a: 1 }, 2] } });
  });
  it('should return empty object, no intersections', () => {
    const firstObject = {
      a: 1,
      b: 3,
    };
    const secondObject = {
      b: 2,
      c: 3,
    };

    expect(intersectionDeep(firstObject, secondObject)).toEqual({});
  });
});
