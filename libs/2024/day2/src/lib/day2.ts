import { readInputFile } from '@advent-of-code/read-input-file';

export class Day2 {
  constructor(private filename: string) {}

  async partOne(): Promise<number> {
    const file = await readInputFile(this.filename);
    let unsafeCount = 0;
    for(const row of file) {
      const numbers = row.split(' ');
      if(this.isLineUnsafe(numbers)) unsafeCount++;
    }
    return file.length - unsafeCount;
  }

  async partTwo(): Promise<number> {
    const file = await readInputFile(this.filename);
    let unsafeCount = 0;
    for(const row of file) {
      const numbers = row.split(' ');
      const unsafeIndex = this.isLineUnsafe(numbers);
      const dumpedRow = numbers.slice(0, unsafeIndex).concat(numbers.slice(unsafeIndex + 1));
      const dumpedRow2 = numbers.slice(0, unsafeIndex -1).concat(numbers.slice(unsafeIndex));
      const dumpedRow3 = numbers.slice(1, numbers.length);
      if(!!unsafeIndex && (this.isLineUnsafe(dumpedRow) && this.isLineUnsafe(dumpedRow2)) && this.isLineUnsafe(dumpedRow3)) {
        console.log(row, dumpedRow, dumpedRow2);
        unsafeCount++;
      }
    }
    return file.length - unsafeCount;
  }

  private isLineUnsafe(numbers: string[]): number | null {
    let previousDistance = null;

    for(let i = 0; i < numbers.length - 1; i++) {
      const distance = +numbers[i] - +numbers[i+1];
      const isNotLinear = !!previousDistance && previousDistance * distance < 0;
      const isDistanceUnsafe = (Math.abs(distance) < 1 || Math.abs(distance) > 3);

      previousDistance = distance;

      if(isNotLinear || isDistanceUnsafe) {
        return i+1;
      }
    }
    return null;
  }
}
