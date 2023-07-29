import { Directive, HostBinding, computed, inject } from '@angular/core';
import { NgpAccordionPanel } from '../accordion-panel/accordion-panel.token';
import { NgpAccordion } from '../accordion/accordion.token';

@Directive({
  standalone: true,
})
export class NgpAccordionStateDirective {
  /**
   * Access the accordion the trigger belongs to.
   */
  private readonly accordion = inject(NgpAccordion);

  /**
   * Access the panel the trigger belongs to.
   */
  private readonly panel = inject(NgpAccordionPanel);

  /**
   * Determine the expanded state of the panel.
   * @internal
   */
  @HostBinding('attr.data-state')
  readonly state = computed(() => (this.panel.isExpanded() ? 'expanded' : 'collapsed'));

  /**
   * Determine the disabled state of the panel.
   * @internal
   */
  @HostBinding('attr.data-disabled')
  get isDisabled(): boolean {
    return this.panel.disabled || this.accordion.disabled;
  }

  /**
   * Determine the orientation of the accordion.
   * @internal
   */
  @HostBinding('attr.data-orientation')
  get orientation(): 'horizontal' | 'vertical' {
    return this.accordion.orientation;
  }
}
