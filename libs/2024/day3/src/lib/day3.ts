import { readInputFile } from '@advent-of-code/read-input-file';

export class Day3 {
  constructor(private filename: string) {}

  async partOne(): Promise<number> {
    const file = await readInputFile(this.filename);
    let sum = 0;
    for(const row of file) {
      const output = this.getMultiplications(row);
      for(const multiplication of output) {
        sum+= multiplication[0] * multiplication[1];
      }
    }
    return sum;
  }

  async partTwo(): Promise<number> {
    const file = await readInputFile(this.filename);
    let sum = 0;
    const data = file.join().replace(/don't\(\)(.*?)(do\(\)|$)/g, '');
    const output = this.getMultiplications(data);
    for(const multiplication of output) {
      sum+= multiplication[0] * multiplication[1];
    }
    return sum;
  }

  private getMultiplications(text: string): number[][] {
    const match = [...text.matchAll(/mul\(([0-9]{1,3},[0-9]{1,3})\)/g)]
    return (match.map(el => el?.[1].split(',').map(number => +number)));
  }
}
