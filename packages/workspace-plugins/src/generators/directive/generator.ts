import { directiveGenerator as angularDirectiveGenerator } from '@nx/angular/generators';
import { formatFiles, Tree } from '@nx/devkit';
import { DirectiveGeneratorSchema } from './schema';

export async function directiveGenerator(tree: Tree, options: DirectiveGeneratorSchema) {
  await angularDirectiveGenerator(tree, {
    name: options.name,
    project: options.project,
    flat: false,
    export: true,
    prefix: 'ngp',
    standalone: true,
  });
  await formatFiles(tree);
}

export default directiveGenerator;
