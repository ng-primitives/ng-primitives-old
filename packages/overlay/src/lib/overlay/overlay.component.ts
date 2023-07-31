/* eslint-disable @angular-eslint/directive-selector */
import { Component, ContentChild, TemplateRef, ViewChild } from '@angular/core';
import type { NgpOverlayArrowDirective } from '../overlay-arrow/overlay-arrow.directive';
import { NgpOverlayArrowToken } from '../overlay-arrow/overlay-arrow.token';
import type { NgpOverlayContentDirective } from '../overlay-content/overlay-content.directive';
import { NgpOverlayContentToken } from '../overlay-content/overlay-content.token';

@Component({
  selector: 'ngp-overlay',
  standalone: true,
  template: `
    <ng-template #content>
      <ng-content />
    </ng-template>
  `,
})
export class NgpOverlayComponent {
  /**
   * Access the overlay element
   */
  @ViewChild('content', { static: true }) templateRef!: TemplateRef<void>;

  /**
   * Find the content directive
   */
  @ContentChild(NgpOverlayContentToken, { descendants: true })
  content?: NgpOverlayContentDirective;

  /**
   * Find the tooltip arrow
   */
  @ContentChild(NgpOverlayArrowToken, { descendants: true })
  arrow?: NgpOverlayArrowDirective;

  /**
   * Define the position of the overlay.
   */
  setPosition(x: number, y: number): void {
    this.content?.setPosition(x, y);
  }
}
