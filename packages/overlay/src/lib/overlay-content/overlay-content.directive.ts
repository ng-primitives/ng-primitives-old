import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[ngpOverlayContent]',
  standalone: true,
})
export class NgpOverlayContentDirective {
  /**
   * Define the x position of the overlay.
   */
  @HostBinding('style.left.px')
  protected x: number = 0;

  /**
   * Define the y position of the overlay.
   */
  @HostBinding('style.top.px')
  protected y: number = 0;

  /**
   * Define the position of the overlay.
   */
  setPosition(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }
}
