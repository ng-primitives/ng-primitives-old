import {
  formatFiles,
  generateFiles,
  getWorkspaceLayout,
  joinPathFragments,
  names,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { addExportToIndex } from '../../utils';
import { ConfigGeneratorSchema } from './schema';

export async function configGenerator(tree: Tree, options: ConfigGeneratorSchema) {
  const sourceRoot = joinPathFragments(
    getWorkspaceLayout(tree).libsDir,
    'ng-primitives',
    options.entrypoint,
    'src',
  );
  generateFiles(tree, path.join(__dirname, 'files'), sourceRoot, {
    ...options,
    ...names(options.entrypoint),
  });

  addExportToIndex(
    tree,
    options.entrypoint,
    `export * from './config/${names(options.entrypoint).fileName}.config';`,
  );

  await formatFiles(tree);
}

export default configGenerator;
