import { Day2 } from './day2';

describe('day2', () => {

  describe('test input', () => {
    let day2: Day2;

    beforeEach(() => {
      day2 = new Day2('test-input');
    })

    it('part one should work', async() => {
      expect(await day2.partOne()).toEqual(2);
    });

    it('part two should work', async() => {
      expect(await day2.partTwo()).toEqual(4);
    })
  });

  describe('test input2', () => {
    let day2: Day2;

    beforeEach(() => {
      day2 = new Day2('test-input2');
    })

    it('part two should work', async() => {
      expect(await day2.partTwo()).toEqual(8);
    })
  });

  describe('input', () => {
    let day2: Day2;

    beforeEach(() => {
      day2 = new Day2('input');
    })

    it('part one should work', async() => {
      expect(await day2.partOne()).toEqual(326);
    });

    it('part two should work', async() => {
      expect(await day2.partTwo()).toEqual(382);
    })
  });
});
