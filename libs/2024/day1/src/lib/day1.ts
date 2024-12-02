import * as fs from 'fs/promises';
import { quicksort } from '@advent-of-code/quicksort';
import { readInputFile } from '@advent-of-code/read-input-file';
import { uniqueOccurrences } from '@advent-of-code/unique-occurrences';

export class Day1 {
  constructor(private filename: string) {}

  async partOne(): Promise<number> {
    const fileContent = await readInputFile(this.filename);
    const { leftList, rightList } = this.splitFileIntoLists(fileContent);
    const leftListSorted = quicksort(leftList);
    const rightListSorted = quicksort(rightList);

    let sum = 0;
    while (leftListSorted.length > 0) {
      const left = leftListSorted.shift();
      const right = rightListSorted.shift();
      const distance = Math.abs((left || 0) - (right || 0));
      sum += distance;
    }

    return sum;
  }


  async partTwo(): Promise<number> {
    const fileContent = await readInputFile(this.filename);
    const {leftList, rightList} = this.splitFileIntoLists(fileContent);
    const leftListSorted = quicksort(leftList);
    const rightListSorted = quicksort(rightList);
    const mapList = uniqueOccurrences(rightListSorted);

    let sum = 0;
    for (let i = 0; i < leftListSorted.length; i++) {
      const number = leftListSorted[i];
      sum += number * (mapList.get(number) || 0);
    }

    return sum;
  }



  private splitFileIntoLists(file: string[]): {leftList: number[], rightList: number[]} {
    const leftList = [];
    const rightList = [];

    for (const pair of file) {
      const [left, right] = pair.split(/\s+/);
      leftList.push(+left);
      rightList.push(+right);
    }

    return {leftList, rightList};
  }
}

