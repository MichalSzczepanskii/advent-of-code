export interface DayGeneratorSchema {
  name: string;
  year: string;
  compiler?: 'swc' | 'tsc';
  linter?: 'eslint' | 'none';
  unitTestRunner?: 'jest' | 'none';
}
