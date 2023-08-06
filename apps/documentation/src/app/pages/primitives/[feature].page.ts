import { injectContent, injectContentFiles } from '@analogjs/content';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import data from '../../assets/documentation.json';
import { CodeGroupTabComponent } from '../../components/code-group-tab/code-group-tab.component';
import { CodeGroupComponent } from '../../components/code-group/code-group.component';
import { HeadingComponent } from '../../components/heading/heading.component';
import { PropertiesComponent } from '../../components/properties/properties.component';
import { PropertyComponent } from '../../components/property/property.component';
import { Compodoc, DirectiveDecl, MethodsClass } from '../../models/compodoc';

@Component({
  selector: 'docs-component-docs',
  standalone: true,
  imports: [
    CommonModule,
    CodeGroupComponent,
    CodeGroupTabComponent,
    HeadingComponent,
    PropertiesComponent,
    PropertyComponent,
  ],
  template: `
    <h1>{{ title }}</h1>

    <p class="lead">{{ description }}</p>

    <h2 id="installation" class="scroll-mt-24" docs-heading>Installation</h2>

    <p>Install the component from your command line.</p>

    <docs-code-group>
      <docs-code-group-tab title="NPM">npm install {{ package }}</docs-code-group-tab>
      <docs-code-group-tab title="Yarn">yarn install {{ package }}</docs-code-group-tab>
    </docs-code-group>

    <h2 id="example" class="scroll-mt-24" docs-heading>Anatomy</h2>

    <p>Import all parts and piece them together.</p>

    <docs-code-group>
      <docs-code-group-tab title="HTML">npm install @ng-primtives/accordion</docs-code-group-tab>
      <docs-code-group-tab title="TypeScript"
        >yarn install @ng-primtives/accordion</docs-code-group-tab
      >
      <docs-code-group-tab title="CSS">yarn install @ng-primtives/accordion</docs-code-group-tab>
    </docs-code-group>

    <h2 id="api" class="scroll-mt-24" docs-heading>API Reference</h2>

    <p>The Inputs, Outputs, Methods and details.</p>

    <ng-container *ngFor="let directive of directives">
      <h3>{{ directive.name }}</h3>

      <p *ngIf="directive.rawdescription">{{ directive.rawdescription }}</p>

      <ng-container *ngIf="directive.inputsClass.length">
        <h4 class="font-semibold">Inputs</h4>

        <docs-properties>
          <li
            *ngFor="let input of directive.inputsClass"
            docs-property
            [name]="input.name"
            [type]="input.type"
            [description]="input.rawdescription"
          ></li>
        </docs-properties>
      </ng-container>

      <ng-container *ngIf="directive.outputsClass.length">
        <h4 class="font-semibold">Outputs</h4>

        <docs-properties>
          <li
            *ngFor="let output of directive.outputsClass"
            docs-property
            [name]="output.name"
            [type]="output.type"
            [description]="output.rawdescription"
          ></li>
        </docs-properties>
      </ng-container>

      <ng-container *ngIf="directive.methodsClass.length">
        <h4 class="font-semibold">Methods</h4>

        <docs-properties>
          <li
            *ngFor="let method of getPublicMethods(directive)"
            docs-property
            [name]="getMethodName(method)"
            [description]="method.rawdescription"
          ></li>
        </docs-properties>
      </ng-container>
    </ng-container>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export default class HomeComponent {
  readonly feature$ = injectContent<Feature>('feature');

  readonly definitions: Compodoc = data;

  title?: string;

  description?: string;

  package?: string;

  directives: DirectiveDecl[] = [];

  constructor() {
    debugger;
    const a = injectContentFiles();
    debugger;
  }

  ngOnInit(): void {
    this.feature$.subscribe(feature => {
      this.title = feature.attributes.title;
      this.description = feature.attributes.description;
      this.package = feature.attributes.package;
      this.directives =
        (feature.attributes.directives
          ?.map(directive => {
            return this.definitions.directives.find(d => d.name === directive);
          })
          .filter(d => d !== undefined) as DirectiveDecl[]) ?? [];
    });
  }

  getMethodName(method: MethodsClass): string {
    // concat the method name with the parameters and return type
    return `${method.name}(${method.args.map(p => `${p.name}: ${p.type}`).join(', ')}): ${
      method.returnType
    }`;
  }

  getPublicMethods(directive: DirectiveDecl): MethodsClass[] {
    return directive.methodsClass.filter(method => {
      return !method.modifierKind?.includes(121) && !method.modifierKind?.includes(122);
    });
  }
}

interface Feature {
  title: string;
  description: string;
  package: string;
  directives: string[];
}
