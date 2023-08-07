import { Directive } from '@angular/core';
import { injectCheckbox } from '../checkbox/checkbox.token';

@Directive({
  selector: '[ngpCheckboxIndicator]',
  standalone: true,
  host: {
    '[style.pointer-events]': '"none"',
    '[attr.data-state]': 'checkbox.state',
    '[attr.data-disabled]': 'checkbox.disabled ? "" : null',
  },
})
export class NgpCheckboxIndicatorDirective {
  /**
   * Access the checkbox that the indicator belongs to.
   */
  protected readonly checkbox = injectCheckbox();
}
