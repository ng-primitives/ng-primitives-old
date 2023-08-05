import { CommonModule } from '@angular/common';
import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { CodeGroupTabComponent } from '../code-group-tab/code-group-tab.component';
import { CopyButtonComponent } from '../copy-button/copy-button.component';

@Component({
  selector: 'docs-code-group',
  standalone: true,
  imports: [CommonModule, CopyButtonComponent],
  templateUrl: './code-group.component.html',
  styleUrls: ['./code-group.component.scss'],
  host: {
    '[attr.title]': 'null',
  },
})
export class CodeGroupComponent {
  /**
   * Optionally display a title for the code group.
   */
  @Input() title?: string;

  /**
   * Store the selected index
   */
  selectedIndex = 0;

  /**
   * Access the tabs in the code group.
   */
  @ContentChildren(CodeGroupTabComponent) tabs?: QueryList<CodeGroupTabComponent>;
}
