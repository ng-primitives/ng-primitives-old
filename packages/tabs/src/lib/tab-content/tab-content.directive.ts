import { Directive, Input } from '@angular/core';
import { injectTabset } from '../tabset/tabset.token';

@Directive({
  selector: '[ngpTabContent]',
  standalone: true,
  host: {
    '[attr.data-state]': 'active ? "active" : "inactive"',
    '[attr.data-orientation]': 'tabset.orientation',
  },
})
export class NgpTabContentDirective {
  /**
   * Access the tabset
   */
  protected readonly tabset = injectTabset();

  /**
   * The value of the tab
   */
  @Input({ alias: 'ngpTabContentValue', required: true }) value!: string;

  /**
   * Whether the tab is active
   */
  protected get active(): boolean {
    return this.tabset.value === this.value;
  }
}
