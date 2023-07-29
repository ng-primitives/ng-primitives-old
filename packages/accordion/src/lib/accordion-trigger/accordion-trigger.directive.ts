import { Directive, HostBinding, HostListener, inject } from '@angular/core';
import { NgpAccordionPanel } from '../accordion-panel/accordion-panel.token';
import { NgpAccordionStateDirective } from '../common/accordion-state.directive';

@Directive({
  selector: '[ngpAccordionTrigger]',
  standalone: true,
  hostDirectives: [NgpAccordionStateDirective],
})
export class NgpAccordionTriggerDirective {
  /**
   * Access the panel the trigger belongs to.
   */
  private readonly panel = inject(NgpAccordionPanel);

  /**
   * Get the expanded state of the panel.
   * @internal
   */
  @HostBinding('attr.aria-expanded')
  readonly isExpanded = this.panel.isExpanded();

  /**
   * Derive the id of the trigger.
   */
  @HostBinding('attr.id')
  get triggerId(): string {
    return `${this.panel.id}-trigger`;
  }

  /**
   * Get the id of the panel content.
   * @internal
   */
  @HostBinding('attr.aria-controls')
  readonly contentId = `${this.panel.id}-content`;

  /**
   * Toggle the expanded state of the panel.
   */
  @HostListener('click')
  toggle(): void {
    this.panel.toggle();
  }
}
