import {
  formatFiles,
  generateFiles, installPackagesTask, joinPathFragments, readProjectConfiguration,
  Tree
} from '@nx/devkit';
import { DayGeneratorSchema } from './schema';
import { libraryGenerator } from '@nx/node';
import { capitalize } from '@nx/devkit/src/utils/string-utils';

export async function dayGenerator(tree: Tree, options: DayGeneratorSchema) {
  await libraryGenerator(tree, {
    compiler: options?.compiler || 'tsc',
    name: options.name,
    directory: `libs/${options.year}/${options.name}`,
    linter: options?.linter || 'eslint',
    unitTestRunner: options?.unitTestRunner || 'jest',
  });

  const libraryRoot = readProjectConfiguration(tree, options.name).root;
  generateFiles(
    tree,
    joinPathFragments(__dirname, './files'),
    libraryRoot,
    {
      ...options,
      capitalize
    }
  )

  await formatFiles(tree);
  return () => {
    installPackagesTask(tree)
  }

}

export default dayGenerator;
