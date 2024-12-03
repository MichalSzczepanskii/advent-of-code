import { Day3 } from './day3';

describe('day1', () => {
  describe('test input', () => {
    let day3: Day3;

    beforeEach(() => {
      day3 = new Day3('test-input');
    });

    it('part one should work', async () => {
      expect(await day3.partOne()).toEqual(161);
    });

    it('part two should work', async () => {
      expect(await day3.partTwo()).toEqual(48);
    });
  });

  describe('input', () => {
    let day3: Day3;

    beforeEach(() => {
      day3 = new Day3('input');
    });

    it('part one should work', async () => {
      expect(await day3.partOne()).toEqual(182780583);
    });

    it('part two should work', async () => {
      expect(await day3.partTwo()).toEqual(0);
    });
  });
});
