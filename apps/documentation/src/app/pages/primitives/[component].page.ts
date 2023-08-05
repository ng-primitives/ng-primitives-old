import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CodeGroupTabComponent } from '../../components/code-group-tab/code-group-tab.component';
import { CodeGroupComponent } from '../../components/code-group/code-group.component';
import { HeadingComponent } from '../../components/heading/heading.component';
import { PropertiesComponent } from '../../components/properties/properties.component';
import { PropertyComponent } from '../../components/property/property.component';

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
    <h1>Accordion</h1>

    <p class="lead">
      A vertically stacked set of interactive headings that each reveal an associated section of
      content.
    </p>

    <h2 id="installation" class="scroll-mt-24" docs-heading>Installation</h2>

    <p>Install the component from your command line.</p>

    <docs-code-group>
      <docs-code-group-tab title="NPM">npm install @ng-primtives/accordion</docs-code-group-tab>
      <docs-code-group-tab title="Yarn">yarn install @ng-primtives/accordion</docs-code-group-tab>
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

    <h3 id="NgpAccordion" docs-heading>NgpAccordion</h3>

    <p>The root accordion directive that all parts should be placed within.</p>

    <h4 class="font-semibold">Inputs</h4>

    <docs-properties>
      <li
        docs-property
        name="ngpAccordionMultiple"
        type="boolean"
        description="Whether or not the multiple."
      ></li>
    </docs-properties>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export default class HomeComponent {}
