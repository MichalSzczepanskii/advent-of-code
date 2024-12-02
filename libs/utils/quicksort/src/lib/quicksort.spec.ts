import { quicksort } from './quicksort';

describe('quicksort', () => {
  it('should sort an array', () => {
    expect(quicksort([3, 7, 2, 5, 1, 4, 6, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
  });
});

