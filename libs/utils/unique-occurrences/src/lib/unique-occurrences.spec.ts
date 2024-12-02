import { uniqueOccurrences } from './unique-occurrences';

describe('uniqueOccurrences', () => {
  it('should count occurrences in array', () => {
    const output = new Map();
    output.set(2, 2);
    output.set(3, 1);
    output.set(4, 3);
    expect(uniqueOccurrences([2, 2, 3, 4, 4, 4])).toEqual(output);
  });
});
