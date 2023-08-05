import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, inject } from '@angular/core';

@Component({
  selector: 'docs-code-group-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './code-group-tab.component.html',
  styleUrls: ['./code-group-tab.component.scss'],
  host: {
    '[attr.title]': 'null',
  },
})
export class CodeGroupTabComponent {
  /**
   * The elementref
   */
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  /**
   * Define the tab title
   */
  @Input({ required: true }) title?: string;

  get content(): string {
    return this.elementRef.nativeElement.textContent?.trim() ?? '';
  }
}
