import { Directive, inject } from '@angular/core';
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
export class NgpAccordionContentDirective {
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
}
