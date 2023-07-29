import { Directive, Input } from '@angular/core';
import { injectTabset } from '../tabset/tabset.token';

@Directive({
  selector: '[ngpTabPanel]',
  standalone: true,
  host: {
    role: 'tabpanel',
    tabIndex: '0',
    '[attr.id]': 'id',
    '[attr.aria-labelledby]': 'labelledBy',
    '[attr.data-state]': 'active ? "active" : "inactive"',
    '[attr.data-orientation]': 'tabset.orientation',
    '[hidden]': '!active',
  },
})
export class NgpTabPanelDirective {
  /**
   * Access the tabset
   */
  protected readonly tabset = injectTabset();

  /**
   * The value of the tab
   */
  @Input({ alias: 'ngpTabPanelValue', required: true }) value!: string;

  /**
   * Determine the id of the tab panel
   * @internal
   */
  protected readonly id = `${this.tabset.id}-panel-${this.value}`;

  /**
   * Determine the aria-labelledby of the tab panel
   * @internal
   */
  protected readonly labelledBy = `${this.tabset.id}-button-${this.value}`;

  /**
   * Whether the tab is active
   */
  protected get active(): boolean {
    return this.tabset.value === this.value;
  }
}
