import { Directive, HostBinding, inject } from '@angular/core';
import { NgpAccordionPanel } from '../accordion-panel/accordion-panel.token';
import { NgpAccordionStateDirective } from '../common/accordion-state.directive';

@Directive({
  selector: '[ngpAccordionContent]',
  standalone: true,
  host: {
    role: 'region',
  },
  hostDirectives: [NgpAccordionStateDirective],
})
export class NgpAccordionContentDirective {
  /**
   * Access the panel the content belongs to.
   */
  private readonly panel = inject(NgpAccordionPanel);

  /**
   * Derive the id of the content.
   * @internal
   */
  @HostBinding('attr.id')
  readonly id = `${this.panel.id}-content`;

  /**
   * Derive the id of the trigger.
   * @internal
   */
  @HostBinding('attr.aria-labelledby')
  readonly labelledby = `${this.panel.id}-trigger`;
}
