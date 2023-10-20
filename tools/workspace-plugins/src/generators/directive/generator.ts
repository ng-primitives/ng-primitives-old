import { directiveGenerator as angularDirectiveGenerator } from '@nx/angular/generators';
import { formatFiles, joinPathFragments, names, Tree } from '@nx/devkit';
import { addExportToIndex, getSourceRoot } from '../../utils';
import { DirectiveGeneratorSchema } from './schema';

export async function directiveGenerator(tree: Tree, options: DirectiveGeneratorSchema) {
  await angularDirectiveGenerator(tree, {
    name: options.name,
    project: 'ng-primitives',
    flat: false,
    export: false, // broken
    prefix: 'ngp',
    standalone: true,
    path: getSourceRoot(tree, options.entrypoint),
  });

  // prefix directive class
  prefixDirectiveClass(tree, options);

  addExportToIndex(
    tree,
    options.entrypoint,
    `export * from './${options.name}/${options.name}.directive';`,
  );

  await formatFiles(tree);
}

export default directiveGenerator;

function prefixDirectiveClass(tree: Tree, options: DirectiveGeneratorSchema): void {
  // get the path the to directive directory
  const directory = getSourceRoot(tree, options.entrypoint);

  // the directive class file and spec file should be updated
  const filesToUpdate = [
    joinPathFragments(directory, options.name, `${options.name}.directive.ts`),
    joinPathFragments(directory, options.name, `${options.name}.directive.spec.ts`),
  ];

  const className = names(options.name).className + 'Directive';

  // update the files renaming the class to have an Ngp prefix
  for (const file of filesToUpdate) {
    const content = tree.read(file).toString();

    // replace all occurrences of the class name
    const updatedContent = content.replace(new RegExp(className, 'g'), 'Ngp' + className);

    tree.write(file, updatedContent);
  }
}
