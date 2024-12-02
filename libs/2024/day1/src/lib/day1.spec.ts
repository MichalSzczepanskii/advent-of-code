import { Day1 } from './day1';

describe('day1', () => {

  describe('test input', () => {
    let day1: Day1;

    beforeEach(() => {
      day1 = new Day1('test-input');
    })

    it('part one should work', async() => {
      expect(await day1.partOne()).toEqual(11);
    });

    it('part two should work', async() => {
      expect(await day1.partTwo()).toEqual(31);
    })
  });

  describe('input', () => {
    let day1: Day1;

    beforeEach(() => {
      day1 = new Day1('input');
    })

    it('part one should work', async() => {
      expect(await day1.partOne()).toEqual(936063);
    });

    it('part two should work', async() => {
      expect(await day1.partTwo()).toEqual(23150395);
    })
  })
});
