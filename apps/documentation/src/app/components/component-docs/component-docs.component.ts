import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CodeGroupTabComponent } from '../code-group-tab/code-group-tab.component';
import { CodeGroupComponent } from '../code-group/code-group.component';
import { HeadingComponent } from '../heading/heading.component';

@Component({
  selector: 'docs-component-docs',
  standalone: true,
  imports: [CommonModule, CodeGroupComponent, CodeGroupTabComponent, HeadingComponent],
  templateUrl: './component-docs.component.html',
  styleUrls: ['./component-docs.component.scss'],
})
export class ComponentDocsComponent {}
