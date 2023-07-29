import {
  UnitTestRunner,
  libraryGenerator as angularLibraryGenerator,
} from '@nx/angular/generators';
import { Tree, formatFiles, names } from '@nx/devkit';
import { Linter } from '@nx/linter';
import { LibraryGeneratorSchema } from './schema';

export async function libraryGenerator(tree: Tree, options: LibraryGeneratorSchema) {
  await angularLibraryGenerator(tree, {
    name: options.name,
    buildable: true,
    changeDetection: 'OnPush',
    importPath: `@ng-primitives/${names(options.name).fileName}`,
    linter: Linter.EsLint,
    prefix: 'ngp',
    publishable: true,
    standalone: true,
    strict: true,
    style: 'scss',
    unitTestRunner: UnitTestRunner.Jest,
  });

  await formatFiles(tree);
}

export default libraryGenerator;
