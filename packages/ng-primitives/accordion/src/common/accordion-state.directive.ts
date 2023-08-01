import { Directive, computed } from '@angular/core';
import { injectAccordionPanel } from '../accordion-panel/accordion-panel.token';
import { injectAccordion } from '../accordion/accordion.token';

@Directive({
  standalone: true,
  host: {
    '[attr.data-state]': 'state()',
    '[attr.data-disabled]': 'isDisabled',
    '[attr.data-orientation]': 'orientation',
  },
})
export class NgpAccordionStateDirective {
  /**
   * Access the accordion the trigger belongs to.
   */
  private readonly accordion = injectAccordion();

  /**
   * Access the panel the trigger belongs to.
   */
  private readonly panel = injectAccordionPanel();

  /**
   * Determine the expanded state of the panel.
   * @internal
   */
  readonly state = computed(() => (this.panel.isExpanded() ? 'open' : 'closed'));

  /**
   * Determine the disabled state of the panel.
   * @internal
   */
  get isDisabled(): boolean {
    return this.panel.disabled || this.accordion.disabled;
  }

  /**
   * Determine the orientation of the accordion.
   * @internal
   */
  get orientation(): 'horizontal' | 'vertical' {
    return this.accordion.orientation;
  }
}
