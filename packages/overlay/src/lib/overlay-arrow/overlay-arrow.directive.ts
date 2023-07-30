import { Directive, ElementRef, HostBinding, inject } from '@angular/core';

@Directive({
  selector: '[ngpOverlayArrow]',
  standalone: true,
})
export class NgpOverlayArrowDirective {
  /**
   * Access the arrow element
   */
  readonly elementRef = inject(ElementRef<HTMLElement>);

  /**
   * Define the x position of the arrow.
   */
  @HostBinding('style.left.px')
  protected x: number = 0;

  /**
   * Define the y position of the arrow.
   */
  @HostBinding('style.top.px')
  protected y: number = 0;

  /**
   * Define the position of the arrow.
   */
  setPosition(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }
}
