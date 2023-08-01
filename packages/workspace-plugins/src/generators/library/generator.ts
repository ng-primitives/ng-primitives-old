import { librarySecondaryEntryPointGenerator } from '@nx/angular/generators';
import { Tree, formatFiles } from '@nx/devkit';
import directiveGenerator from '../directive/generator';
import { LibraryGeneratorSchema } from './schema';

export async function libraryGenerator(tree: Tree, options: LibraryGeneratorSchema) {
  await librarySecondaryEntryPointGenerator(tree, {
    name: options.name,
    library: 'ng-primitives',
    skipModule: true,
  });

  // create the index.ts file
  tree.write(`packages/ng-primitives/${options.name}/src/index.ts`, '');

  if (!options.skipDirective) {
    await directiveGenerator(tree, {
      name: options.name,
    });
  }

  await formatFiles(tree);
}

export default libraryGenerator;
