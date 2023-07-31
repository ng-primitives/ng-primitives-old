import { directiveGenerator as angularDirectiveGenerator } from '@nx/angular/generators';
import { formatFiles, getWorkspaceLayout, joinPathFragments, names, Tree } from '@nx/devkit';
import { DirectiveGeneratorSchema } from './schema';

export async function directiveGenerator(tree: Tree, options: DirectiveGeneratorSchema) {
  await angularDirectiveGenerator(tree, {
    name: options.name,
    project: options.project,
    flat: false,
    export: false, // broken
    prefix: 'ngp',
    standalone: true,
  });

  // prefix directive class
  prefixDirectiveClass(tree, options);

  addExport(tree, options);

  await formatFiles(tree);
}

export default directiveGenerator;

function addExport(tree: Tree, options: DirectiveGeneratorSchema): void {
  // get the path to the index.ts file
  const indexPath = joinPathFragments(
    getWorkspaceLayout(tree).libsDir,
    options.project,
    'src',
    'index.ts',
  );

  // add the export
  tree.write(
    indexPath,
    `${tree.read(indexPath)}\nexport * from './lib/${options.name}/${options.name}.directive';\n`,
  );
}
function prefixDirectiveClass(tree: Tree, options: DirectiveGeneratorSchema): void {
  // get the path the to directive directory
  const directory = joinPathFragments(
    getWorkspaceLayout(tree).libsDir,
    options.project,
    'src',
    'lib',
    options.name,
  );

  // the directive class file and spec file should be updated
  const filesToUpdate = [
    joinPathFragments(directory, `${options.name}.directive.ts`),
    joinPathFragments(directory, `${options.name}.directive.spec.ts`),
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
