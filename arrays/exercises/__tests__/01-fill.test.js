import { fill } from '../01-fill';

describe('fill function tests', () => {
  it('should return ["a", "a", "a"]', () => {
    expect(fill(3, 'a')).toEqual(['a', 'a', 'a']);
  });
});
