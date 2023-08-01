import { Directive, HostListener, inject } from '@angular/core';
import { NgpAccordionPanelToken } from '../accordion-panel/accordion-panel.token';
import { NgpAccordionStateDirective } from '../common/accordion-state.directive';

@Directive({
  selector: '[ngpAccordionTrigger]',
  standalone: true,
  hostDirectives: [NgpAccordionStateDirective],
  host: {
    '[id]': 'triggerId',
    '[attr.aria-expanded]': 'panel.isExpanded()',
    '[attr.aria-controls]': 'contentId',
  },
})
export class NgpAccordionTriggerDirective {
  /**
   * Access the panel the trigger belongs to.
   */
  protected readonly panel = inject(NgpAccordionPanelToken);

  /**
   * Derive the id of the trigger.
   */
  protected get triggerId(): string {
    return `${this.panel.id}-trigger`;
  }

  /**
   * Get the id of the panel content.
   * @internal
   */
  protected readonly contentId = `${this.panel.id}-content`;

  /**
   * Toggle the expanded state of the panel.
   */
  @HostListener('click')
  toggle(): void {
    this.panel.toggle();
  }
}
