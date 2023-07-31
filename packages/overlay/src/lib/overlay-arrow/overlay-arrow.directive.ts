import { Directive, ElementRef, inject } from '@angular/core';
import { Placement } from '@floating-ui/dom';
import { NgpOverlayArrowToken } from './overlay-arrow.token';

@Directive({
  selector: '[ngpOverlayArrow]',
  standalone: true,
  providers: [{ provide: NgpOverlayArrowToken, useExisting: NgpOverlayArrowDirective }],
})
export class NgpOverlayArrowDirective {
  /**
   * Access the arrow element
   */
  readonly elementRef = inject(ElementRef<HTMLElement>);

  /**
   * Define the position of the arrow.
   */
  setPosition(placement: Placement, arrowX?: number, arrowY?: number): void {
    const staticSide = {
      top: 'bottom',
      right: 'left',
      bottom: 'top',
      left: 'right',
    }[placement.split('-')[0]] as string;

    Object.assign(this.elementRef.nativeElement.style, {
      left: arrowX != null ? `${arrowX}px` : '',
      top: arrowY != null ? `${arrowY}px` : '',
      right: '',
      bottom: '',
      [staticSide]: `-${this.elementRef.nativeElement.offsetWidth / 2}px`,
    });
  }
}
