import * as fs from 'fs/promises';

export async function readInputFile(filename: string): Promise<string[]> {
  const fileContent = await fs.readFile(`src/lib/${filename}.txt`, 'utf8');
  return fileContent.split(/\r?\n/).filter(line => line.trim().length > 0);
}
