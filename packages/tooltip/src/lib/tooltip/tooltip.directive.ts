import { ComponentPortal, DomPortalOutlet } from '@angular/cdk/portal';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Injector,
  Input,
  TemplateRef,
  inject,
  numberAttribute,
} from '@angular/core';
import { Middleware, Placement, autoUpdate, computePosition, flip, offset } from '@floating-ui/dom';
import { NgpTooltipComponent } from './tooltip.component';

@Directive({
  selector: '[ngpTooltip]',
  standalone: true,
})
export class NgpTooltipDirective {
  /**
   * Define the content to display in the tooltip.
   */
  @Input({ alias: 'ngpTooltip', required: true }) content!: TemplateRef<void> | string;

  /**
   * Define the position of the tooltip.
   * @default 'top'
   */
  @Input({ alias: 'ngpTooltipPlacement', transform: numberAttribute }) placement: Placement = 'top';

  /**
   * Define the delay before the tooltip is displayed.
   * @default 0
   */
  @Input({ alias: 'ngpTooltipShowDelay', transform: numberAttribute }) delay: number = 0;

  /**
   * Define the delay before the tooltip is hidden.
   * @default 0
   */
  @Input({ alias: 'ngpTooltipHideDelay', transform: numberAttribute }) hideDelay: number = 0;

  /**
   * Define the tooltip offset.
   * @default 4
   */
  @Input({ alias: 'ngpTooltipOffset', transform: numberAttribute }) offset: number = 4;

  /**
   * Access the tooltip trigger element.
   */
  readonly #trigger = inject(ElementRef<HTMLElement>);

  /**
   * Access the component factory resolver.
   */
  readonly #componentFactoryResolver = inject(ComponentFactoryResolver);

  /**
   * Access the application reference.
   */
  readonly #appRef = inject(ApplicationRef);

  /**
   * Access the injector.
   */
  readonly #injector = inject(Injector);

  /**
   * Store the component reference.
   */
  #componentRef?: ComponentRef<NgpTooltipComponent>;

  /**
   * Store the autoPlacement destroy function.
   */
  #destroyAutoPlacement?: () => void;

  /**
   * Show the tooltip.
   */
  @HostListener('mouseenter')
  @HostListener('focus')
  async show(): Promise<void> {
    this.createTooltip();

    // update the tooltip content
    this.updateTooltip();

    this.#destroyAutoPlacement = autoUpdate(
      this.#trigger.nativeElement,
      this.#componentRef!.location.nativeElement,
      this.updatePosition.bind(this),
    );

    this.#componentRef?.instance.show(this.delay);
  }

  /**
   * Hide the tooltip.
   */
  @HostListener('mouseleave')
  @HostListener('blur')
  async hide(): Promise<void> {
    if (!this.#componentRef) {
      return;
    }

    this.#componentRef.instance.hide(this.hideDelay, () => {
      this.#componentRef?.destroy();
      this.#componentRef = undefined;
      this.#destroyAutoPlacement?.();
    });
  }

  /**
   * Create the tooltip component.
   */
  private createTooltip(): ComponentRef<NgpTooltipComponent> {
    if (this.#componentRef) {
      return this.#componentRef;
    }

    const domPortal = new DomPortalOutlet(
      document.body,
      this.#componentFactoryResolver,
      this.#appRef,
      this.#injector,
    );

    const componentPortal = new ComponentPortal(NgpTooltipComponent);
    this.#componentRef = domPortal.attachComponentPortal(componentPortal);

    return this.#componentRef;
  }

  /**
   * Update the tooltip content.
   */
  private updateTooltip(): void {
    if (!this.#componentRef) {
      return;
    }

    this.#componentRef.instance.content = this.content;
    this.#componentRef.changeDetectorRef.detectChanges();
  }

  /**
   * Update the tooltip position.
   */
  private async updatePosition(): Promise<void> {
    if (!this.#componentRef?.location.nativeElement) {
      return;
    }

    const middleware: Middleware[] = [offset(this.offset), flip()];

    const position = await computePosition(
      this.#trigger.nativeElement,
      this.#componentRef?.location.nativeElement,
      {
        middleware,
        placement: this.placement,
      },
    );

    this.#componentRef!.instance.position = {
      x: position.x,
      y: position.y,
    };

    this.#componentRef!.changeDetectorRef.detectChanges();
  }
}
