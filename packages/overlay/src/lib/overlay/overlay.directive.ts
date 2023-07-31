import { Directive, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';
import { injectOverlayTrigger } from '../overlay-trigger/overlay-trigger.token';
import { NgpOverlayToken } from './overlay.token';

@Directive({
  selector: '[ngpOverlay]',
  standalone: true,
  providers: [{ provide: NgpOverlayToken, useExisting: NgpOverlayDirective }],
})
export class NgpOverlayDirective implements OnInit, OnDestroy {
  /**
   * Access the overlay element
   */
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  /**
   * Access the overlay trigger
   */
  private readonly overlayTrigger = injectOverlayTrigger();

  /**
   * Register the overlay on init
   */
  ngOnInit(): void {
    this.overlayTrigger.registerOverlay(this);
  }

  /**
   * Unregister the overlay on destroy
   */
  ngOnDestroy(): void {
    this.overlayTrigger.unregisterOverlay();
  }

  /**
   * Set the position of the overlay
   * @param x The x position
   * @param y The y position
   * @internal
   */
  setPosition(x?: number, y?: number): void {
    Object.assign(this.elementRef.nativeElement.style, {
      left: `${x}px`,
      top: `${y}px`,
    });
  }
}
