/* eslint-disable @angular-eslint/directive-selector */
import { Component, ContentChild, TemplateRef, ViewChild } from '@angular/core';
import { NgpOverlayArrowDirective } from '../overlay-arrow/overlay-arrow.directive';
import { NgpOverlayContentDirective } from '../overlay-content/overlay-content.directive';

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
  @ViewChild('content', { static: true }) overlayContent!: TemplateRef<void>;

  /**
   * Find the content directive
   */
  @ContentChild(NgpOverlayContentDirective, { descendants: true })
  content?: NgpOverlayContentDirective;

  /**
   * Find the tooltip arrow
   */
  @ContentChild(NgpOverlayArrowDirective, { descendants: true })
  arrow?: NgpOverlayArrowDirective;

  /**
   * Define the position of the overlay.
   */
  setPosition(x: number, y: number): void {
    this.content?.setPosition(x, y);
  }
}
