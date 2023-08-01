import { directiveGenerator as angularDirectiveGenerator } from '@nx/angular/generators';
import { formatFiles, getWorkspaceLayout, joinPathFragments, names, Tree } from '@nx/devkit';
import { DirectiveGeneratorSchema } from './schema';

export async function directiveGenerator(tree: Tree, options: DirectiveGeneratorSchema) {
  await angularDirectiveGenerator(tree, {
    name: options.name,
    project: 'ng-primitives',
    flat: false,
    export: false, // broken
    prefix: 'ngp',
    standalone: true,
    path: getSourceRoot(tree, options),
  });

  // prefix directive class
  prefixDirectiveClass(tree, options);

  addExport(tree, options);

  await formatFiles(tree);
}

function getSourceRoot(tree: Tree, options: DirectiveGeneratorSchema): string {
  return joinPathFragments(
    getWorkspaceLayout(tree).libsDir,
    'ng-primitives',
    names(options.name).fileName,
    'src',
  );
}

export default directiveGenerator;

function addExport(tree: Tree, options: DirectiveGeneratorSchema): void {
  // get the path to the index.ts file
  const indexPath = joinPathFragments(getSourceRoot(tree, options), 'index.ts');

  // add the export
  tree.write(
    indexPath,
    `${tree.read(indexPath)}\nexport * from './lib/${options.name}/${options.name}.directive';`,
  );
}
function prefixDirectiveClass(tree: Tree, options: DirectiveGeneratorSchema): void {
  // get the path the to directive directory
  const directory = getSourceRoot(tree, options);

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
