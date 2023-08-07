import { Directive } from '@angular/core';
import { injectCheckbox } from '../checkbox/checkbox.token';

@Directive({
  selector: '[ngpCheckboxIndicator]',
  standalone: true,
})
export class NgpCheckboxIndicatorDirective {
  /**
   * Access the checkbox that the indicator belongs to.
   */
  private readonly checkbox = injectCheckbox();
}
