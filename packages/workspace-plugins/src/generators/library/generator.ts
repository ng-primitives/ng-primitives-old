import {
  UnitTestRunner,
  libraryGenerator as angularLibraryGenerator,
} from '@nx/angular/generators';
import {
  Tree,
  formatFiles,
  getWorkspaceLayout,
  joinPathFragments,
  names,
  updateJson,
} from '@nx/devkit';
import { Linter } from '@nx/linter';
import directiveGenerator from '../directive/generator';
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

  updateEslint(tree, options);
  deleteComponent(tree, options);

  if (!options.skipDirective) {
    await directiveGenerator(tree, {
      name: options.name,
      project: options.name,
    });
  }

  await formatFiles(tree);
}

export default libraryGenerator;

function updateEslint(tree: Tree, options: LibraryGeneratorSchema): void {
  // determine the path to the eslint config file
  const eslintConfigPath = joinPathFragments(
    getWorkspaceLayout(tree).libsDir,
    options.name,
    '.eslintrc.json',
  );

  updateJson(tree, eslintConfigPath, json => {
    json.overrides[0].rules = {
      ...json.overrides[0].rules,
      '@angular-eslint/no-input-rename': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@angular-eslint/no-host-metadata-property': 'off',
    };

    return json;
  });
}
function deleteComponent(tree: Tree, options: LibraryGeneratorSchema): void {
  // determine the path to the component file
  const componentPath = joinPathFragments(
    getWorkspaceLayout(tree).libsDir,
    options.name,
    'src',
    'lib',
    names(options.name).fileName,
  );

  // delete all files in the component directory
  tree.delete(componentPath);
}
