import { Directive } from '@angular/core';
import { injectRadioGroup } from '../radio-group/radio-group.token';
import { injectRadioItem } from '../radio-item/radio-item.token';

@Directive({
  selector: '[ngpRadioIndicator]',
  standalone: true,
  host: {
    '[attr.data-state]': 'radioGroup.value === radioItem.value ? "checked" : "unchecked"',
    '[attr.data-disabled]': 'radioItem.disabled ? "" : null',
  },
})
export class NgpRadioIndicatorDirective {
  /**
   * Access the radio group.
   */
  protected readonly radioGroup = injectRadioGroup();

  /**
   * Access the radio group item.
   */
  protected readonly radioItem = injectRadioItem();
}
