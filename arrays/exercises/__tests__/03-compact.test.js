import { compact } from '../03-compact';

describe('compact function tests', () => {
  it('should return [1, 2, 3]', () => {
    const data = [0, 1, false, 2, undefined, '', 3, null];

    expect(compact(data)).toEqual([1, 2, 3]);
  });
  it('should return a new compacted array', () => {
    const data = [0, 1, false, 2, undefined, '', 3, null];

    const result1 = compact(data);
    expect(result1 === data).toBe(false);
  });
});
