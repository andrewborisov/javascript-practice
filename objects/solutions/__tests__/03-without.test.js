import { without } from '../03-without';

describe('solution of without function test', () => {
  it('should return new object without listed properties', () => {
    const data = {
      a: 1,
      b: 2,
      c: [3, 4],
    };

    expect(without(data, 'a', 'c')).toEqual({ b: 2 });
  });
  it('should return new object without listed properties', () => {
    const data = {
      property: 'a',
      property2: 2,
      property3: undefined,
      property4: null,
      property5: {
        property: 'a1',
        property2: 2,
      },
    };

    expect(without(data, 'property3', 'property4', 'property5')).toEqual({
      property: 'a',
      property2: 2,
    });
  });
  it('should return new object without listed properties', () => {
    const data = {
      name: 'UserName',
      age: 28,
    };

    expect(without(data, 'age')).toEqual({ name: 'UserName' });
  });
  it('should check that method returns new object', () => {
    const data = {
      a: 1,
      b: 2,
      c: [3, 4],
    };

    const result = without(data, 'a', 'c');
    expect(result).not.toEqual(data);
  });
});
