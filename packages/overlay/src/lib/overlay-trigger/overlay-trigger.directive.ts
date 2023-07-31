import { DomPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  Injector,
  Input,
  ViewContainerRef,
  booleanAttribute,
  inject,
  numberAttribute,
} from '@angular/core';
import {
  Middleware,
  Placement,
  arrow,
  autoUpdate,
  computePosition,
  flip,
  offset,
  shift,
} from '@floating-ui/dom';
import { NgpOverlayComponent } from '../overlay/overlay.component';

@Directive({
  selector: '[ngpOverlayTrigger]',
  standalone: true,
  exportAs: 'ngpOverlayTrigger',
})
export class NgpOverlayTriggerDirective {
  /**
   * Access the application ref
   */
  private readonly appRef = inject(ApplicationRef);

  /**
   * Access the component factory resolver
   */
  private readonly componentFactoryResolver = inject(ComponentFactoryResolver);

  /**
   * Access the injector
   */
  private readonly injector = inject(Injector);

  /**
   * Access the trigger element
   */
  private readonly trigger = inject(ElementRef<HTMLElement>);

  /**
   * Access the view container
   */
  private readonly viewContainer = inject(ViewContainerRef);

  /**
   * Define the overlay to display when the trigger is activated.
   */
  @Input({ alias: 'ngpOverlayTrigger', required: true }) overlay!: NgpOverlayComponent;

  /**
   * Define if the trigger should be disabled.
   * @default false
   */
  @Input({ alias: 'ngpOverlayDisabled', transform: booleanAttribute }) disabled: boolean = false;

  /**
   * Define the placement of the overlay relative to the trigger.
   * @default 'bottom'
   */
  @Input('ngpOverlayPlacement') placement: Placement = 'bottom';

  /**
   * Define the offset of the overlay relative to the trigger.
   * @default 0
   */
  @Input({ alias: 'ngpOverlayOffset', transform: numberAttribute }) offset: number = 0;

  /**
   * Define the delay before the overlay is displayed.
   * @default 0
   */
  @Input({ alias: 'ngpOverlayShowDelay', transform: numberAttribute }) showDelay: number = 0;

  /**
   * Define the delay before the overlay is hidden.
   * @default 0
   */
  @Input({ alias: 'ngpOverlayHideDelay', transform: numberAttribute }) hideDelay: number = 0;

  /**
   * Define whether the overlay should shift when the overlay is near the edge of the viewport.
   * @default true
   */
  @Input({ alias: 'ngpOverlayShift', transform: booleanAttribute }) shift: boolean = true;

  /**
   * Define whether the overlay should flip when there is not enough space for the overlay.
   * @default true
   */
  @Input({ alias: 'ngpOverlayFlip', transform: booleanAttribute }) flip: boolean = true;

  /**
   * Define the container in to which the overlay should be attached.
   * @default document.body
   */
  @Input('ngpOverlayContainer') container: HTMLElement = document.body;

  /**
   * Store the view ref
   */
  private viewRef: EmbeddedViewRef<void> | null = null;

  /**
   * Store the show delay timeout
   */
  private showDelayTimeout: number | null = null;

  /**
   * Store the hide delay timeout
   */
  private hideDelayTimeout: number | null = null;

  /**
   * Store the dispose function
   */
  private dispose?: () => void;

  /**
   * Create the overlay.
   */
  private createOverlay(): void {
    const domPortal = new DomPortalOutlet(
      this.container,
      this.componentFactoryResolver,
      this.appRef,
      this.injector,
    );

    const templatePortal = new TemplatePortal(this.overlay.templateRef, this.viewContainer);

    this.viewRef = domPortal.attach(templatePortal);
    this.viewRef.detectChanges();
  }

  /**
   * Update the overlay position.
   */
  private updateOverlayPosition(): void {
    if (!this.viewRef) {
      return;
    }

    const overlayElement = this.viewRef.rootNodes[0] as HTMLElement;

    const middleware: Middleware[] = [];

    if (this.offset) {
      middleware.push(offset(this.offset));
    }

    if (this.shift) {
      middleware.push(shift());
    }

    if (this.flip) {
      middleware.push(flip());
    }

    // if there is an arrow defined, we need to add the arrow middleware
    if (this.overlay.arrow) {
      middleware.push(arrow({ element: this.overlay.arrow.elementRef.nativeElement }));
    }

    this.dispose = autoUpdate(this.trigger.nativeElement, overlayElement, async () => {
      const position = await computePosition(this.trigger.nativeElement, overlayElement, {
        placement: this.placement,
        middleware,
      });

      this.overlay.content?.setPosition(position.x, position.y);

      if (position.middlewareData.arrow) {
        this.overlay.arrow?.setPosition(
          this.placement,
          position.middlewareData.arrow.x,
          position.middlewareData.arrow.y,
        );
      }
    });
  }

  /**
   * Destroy the overlay.
   */
  private destroyOverlay(): void {
    this.viewRef?.destroy();
    this.viewRef = null;

    this.dispose?.();
  }

  /**
   * Show the overlay.
   */
  show(): void {
    if (this.disabled) {
      return;
    }

    if (this.hideDelayTimeout) {
      clearTimeout(this.hideDelayTimeout);
      this.hideDelayTimeout = null;
    }

    this.createOverlay();
    this.updateOverlayPosition();
  }

  /**
   * Hide the overlay.
   */
  hide(): void {
    if (this.disabled) {
      return;
    }

    if (this.showDelayTimeout) {
      clearTimeout(this.showDelayTimeout);
      this.showDelayTimeout = null;
    }

    this.destroyOverlay();
  }
}
