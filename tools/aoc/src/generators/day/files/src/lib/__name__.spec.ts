import { <%= capitalize(name) %> } from './<%= name %>';

describe('day1', () => {

  describe('test input', () => {
    let <%= name %>: <%= capitalize(name) %>;

    beforeEach(() => {
      <%= name %> = new <%= capitalize(name) %>('test-input');
    })

    it('part one should work', async() => {
      expect(await <%= name %>.partOne()).toEqual(0);
    });

    it('part two should work', async() => {
      expect(await <%= name %>.partTwo()).toEqual(0);
    })
  });

  describe('input', () => {
    let <%= name %>: <%= capitalize(name) %>;

    beforeEach(() => {
      <%= name %> = new <%= capitalize(name) %>('input');
    })

    it('part one should work', async() => {
      expect(await <%= name %>.partOne()).toEqual(0);
    });

    it('part two should work', async() => {
      expect(await <%= name %>.partTwo()).toEqual(0);
    })
  })
});
