import { librarySecondaryEntryPointGenerator } from '@nx/angular/generators';
import { Tree, formatFiles, names } from '@nx/devkit';
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
      entrypoint: options.name,
    });
  }

  // get the name as separate words
  const { fileName, className } = names(options.name);

  // create the markdown documentation file
  if (!options.skipDocumentation) {
    tree.write(
      `apps/documentation/src/content/${fileName}.md`,
      `---
title: ${fileName
        .split('-')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ')}
description: TODO
package: >
  @ng-primtives/${fileName}
directives:
  - Ngp${className}Directive
---`,
    );
  }

  await formatFiles(tree);
}

export default libraryGenerator;
