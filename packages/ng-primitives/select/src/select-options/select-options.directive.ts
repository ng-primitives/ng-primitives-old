import { Directionality } from '@angular/cdk/bidi';
import { hasModifierKey } from '@angular/cdk/keycodes';
import {
  ConnectedPosition,
  FlexibleConnectedPositionStrategy,
  Overlay,
  OverlayConfig,
  OverlayRef,
  ScrollStrategyOptions,
} from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  Directive,
  ElementRef,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { injectSelect } from '../select/select.token';

const defaultPositionList: ConnectedPosition[] = [
  {
    originX: 'start',
    originY: 'bottom',
    overlayX: 'start',
    overlayY: 'top',
  },
  {
    originX: 'start',
    originY: 'top',
    overlayX: 'start',
    overlayY: 'bottom',
  },
  {
    originX: 'end',
    originY: 'top',
    overlayX: 'end',
    overlayY: 'bottom',
  },
  {
    originX: 'end',
    originY: 'bottom',
    overlayX: 'end',
    overlayY: 'top',
  },
];

@Directive({
  selector: '[ngpSelectOptions]',
  standalone: true,
})
export class NgpSelectOptionsDirective implements OnDestroy {
  /**
   * Access the select directive.
   */
  private readonly select = injectSelect();

  /**
   * Access the view container reference.
   */
  private readonly viewContainerRef = inject(ViewContainerRef);

  /**
   * Access the template reference.
   */
  private readonly templateRef = inject(TemplateRef);

  /**
   * Access the overlay service.
   */
  private readonly overlay = inject(Overlay);

  /**
   * Access the directionality service.
   */
  private readonly directionality = inject(Directionality);

  /**
   * Access the scroll strategy options.
   */
  private readonly scrollStrategyOptions = inject(ScrollStrategyOptions);

  /**
   * Store the overlay reference.
   */
  private overlayRef?: OverlayRef;

  /**
   * Store the template portal.
   */
  private templatePortal: TemplatePortal = new TemplatePortal(
    this.templateRef,
    this.viewContainerRef,
  );

  /**
   * Store the width of the select.
   */
  private width?: number;

  /**
   * Store the origin element.
   * @internal
   */
  private origin?: ElementRef<HTMLElement>;

  ngOnDestroy() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
    }
  }

  /**
   * Creates an overlay
   */
  private createOverlay() {
    const overlayRef = (this.overlayRef = this.overlay.create(this.buildConfig()));

    overlayRef.keydownEvents().subscribe((event: KeyboardEvent) => {
      if (event.key === 'Escape' && !hasModifierKey(event)) {
        event.preventDefault();
        this.close();
      }
    });
  }

  /**
   * Builds the overlay config
   */
  private buildConfig(): OverlayConfig {
    const positionStrategy = this.createPositionStrategy();
    const overlayConfig = new OverlayConfig({
      direction: this.directionality,
      positionStrategy,
      scrollStrategy: this.scrollStrategyOptions.reposition(),
      hasBackdrop: false,
      width: this.width,
    });

    return overlayConfig;
  }

  /**
   * Updates the state of a position strategy
   */
  private updatePositionStrategy(positionStrategy: FlexibleConnectedPositionStrategy) {
    const positions: ConnectedPosition[] = defaultPositionList.map(currentPosition => ({
      originX: currentPosition.originX,
      originY: currentPosition.originY,
      overlayX: currentPosition.overlayX,
      overlayY: currentPosition.overlayY,
      offsetX: currentPosition.offsetX,
      offsetY: currentPosition.offsetY,
      panelClass: currentPosition.panelClass || undefined,
    }));

    return positionStrategy
      .setOrigin(this.origin!)
      .withPositions(positions)
      .withFlexibleDimensions(true)
      .withPush(true)
      .withGrowAfterOpen(false)
      .withViewportMargin(0)
      .withLockedPosition(true);
  }

  /**
   * Returns the position strategy of the overlay to be set on the overlay config
   */
  private createPositionStrategy(): FlexibleConnectedPositionStrategy {
    const strategy = this.overlay.position().flexibleConnectedTo(this.origin!);
    this.updatePositionStrategy(strategy);
    return strategy;
  }

  /**
   * Attaches the overlay
   */
  open() {
    if (!this.overlayRef) {
      this.createOverlay();
    }

    if (!this.overlayRef?.hasAttached()) {
      this.overlayRef?.attach(this.templatePortal);
    }
  }

  /**
   * Detaches the overlay
   */
  close() {
    if (this.overlayRef) {
      this.overlayRef.detach();
    }
  }

  /**
   * Update the position of the overlay.
   */
  updatePosition(): void {
    this.overlayRef?.updatePosition();
  }

  /**
   * Update the width of the overlay.
   */
  updateWidth(width: number): void {
    this.width = width;
    this.overlayRef?.updateSize({ width });
    this.updatePosition();
  }

  /**
   * Set the origin element.
   * @param origin The origin element.
   */
  setOrigin(origin: ElementRef<HTMLElement>): void {
    this.origin = origin;
  }
}
