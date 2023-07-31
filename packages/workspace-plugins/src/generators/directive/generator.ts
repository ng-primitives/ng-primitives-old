import { directiveGenerator as angularDirectiveGenerator } from '@nx/angular/generators';
import { formatFiles, getWorkspaceLayout, joinPathFragments, Tree } from '@nx/devkit';
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

  // add the export
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
