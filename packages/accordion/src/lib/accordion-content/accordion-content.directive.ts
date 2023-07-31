import {
  AfterViewInit,
  ChangeDetectorRef,
  DestroyRef,
  Directive,
  ElementRef,
  HostBinding,
  inject,
} from '@angular/core';
import { NgpAccordionPanelToken } from '../accordion-panel/accordion-panel.token';
import { NgpAccordionStateDirective } from '../common/accordion-state.directive';

@Directive({
  selector: '[ngpAccordionContent]',
  standalone: true,
  host: {
    role: 'region',
    '[id]': 'id',
    '[attr.aria-labelledby]': 'labelledby',
  },
  hostDirectives: [NgpAccordionStateDirective],
})
export class NgpAccordionContentDirective implements AfterViewInit {
  /**
   * Access the element ref.
   */
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  /**
   * Access the destroy ref.
   */
  private readonly destroyRef = inject(DestroyRef);

  /**
   * Access the change detector ref.
   */
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  /**
   * Access the panel the content belongs to.
   */
  private readonly panel = inject(NgpAccordionPanelToken);

  /**
   * Derive the id of the content.
   * @internal
   */
  readonly id = `${this.panel.id}-content`;

  /**
   * Derive the id of the trigger.
   * @internal
   */
  readonly labelledby = `${this.panel.id}-trigger`;

  /**
   * Define the width of the content as a CSS variable so it can be used in animations.
   * @internal
   */
  @HostBinding('style.--ngp-accordion-content-width.px')
  protected width = this.elementRef.nativeElement.scrollWidth;

  /**
   * Define the height of the content as a CSS variable so it can be used in animations.
   * @internal
   */
  @HostBinding('style.--ngp-accordion-content-height.px')
  protected height = this.elementRef.nativeElement.scrollHeight;

  ngAfterViewInit(): void {
    this.updateContentSize();
  }

  /**
   * Update the size of the content.
   */
  private updateContentSize(): void {
    this.width = this.elementRef.nativeElement.scrollWidth;
    this.height = this.elementRef.nativeElement.scrollHeight;
    this.changeDetectorRef.detectChanges();
  }
}
