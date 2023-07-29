import { Directive, HostListener, Input, booleanAttribute } from '@angular/core';
import { injectTabset } from '../tabset/tabset.token';

@Directive({
  selector: '[ngpTabButton]',
  standalone: true,
  host: {
    '[attr.data-state]': 'active ? "active" : "inactive"',
    '[attr.data-disabled]': 'disabled',
    '[attr.data-orientation]': 'tabset.orientation',
  },
})
export class NgpTabButtonDirective {
  /**
   * Access the tabset
   */
  protected readonly tabset = injectTabset();

  /**
   * The value of the tab this trigger controls
   */
  @Input({ alias: 'ngpTabButtonValue', required: true }) value!: string;

  /**
   * Whether the tab is disabled
   * @default false
   */
  @Input({ alias: 'ngpTabButtonDisabled', transform: booleanAttribute }) disabled = false;

  /**
   * Whether the tab is active
   */
  protected get active(): boolean {
    return this.tabset.value === this.value;
  }

  /**
   * Select the tab this trigger controls
   */
  @HostListener('click')
  select(): void {
    this.tabset.select(this.value);
  }

  /**
   * On focus select the tab this trigger controls if activateOnFocus is true
   */
  @HostListener('focus')
  onFocus(): void {
    if (this.tabset.activateOnFocus) {
      this.select();
    }
  }
}
