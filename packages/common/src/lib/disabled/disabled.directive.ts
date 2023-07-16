import { Directive, Input, booleanAttribute } from '@angular/core';

@Directive({
  selector: '[ngpDisabled]',
  standalone: true,
  host: {
    '[class.ngp-disabled]': 'disabled',
  },
})
export class NgpDisabledDirective {
  /** Define the disabled state */
  @Input({ alias: 'ngpDisabled', transform: booleanAttribute }) disabled?: boolean;
}
