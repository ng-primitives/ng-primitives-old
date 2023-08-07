import { Directive, Input, booleanAttribute } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgpCheckboxToken } from './checkbox.token';

@Directive({
  selector: '[ngpCheckbox]',
  standalone: true,
  providers: [
    { provide: NgpCheckboxToken, useExisting: NgpCheckboxDirective },
    { provide: NG_VALUE_ACCESSOR, useExisting: NgpCheckboxDirective, multi: true },
  ],
  host: {
    // '[attr.data-state]': 'checked ? "checked" : "unchecked"',
  },
})
export class NgpCheckboxDirective implements ControlValueAccessor {
  /**
   * Defines whether the checkbox is checked.
   */
  @Input({ alias: 'ngpCheckboxChecked', transform: booleanAttribute }) checked: boolean = false;

  /**
   * Defines whether the checkbox is indeterminate.
   */
  @Input({ alias: 'ngpCheckboxIndeterminate', transform: booleanAttribute })
  indeterminate: boolean = false;

  /**
   * Defines whether the checkbox is disabled.
   */
  @Input({ alias: 'ngpCheckboxDisabled', transform: booleanAttribute }) disabled: boolean = false;

  /**
   * Store the callback function that should be called when the checkbox checked state changes.
   * @internal
   */
  private onChange?: (checked: boolean) => void;

  /**
   * Store the callback function that should be called when the checkbox is blurred.
   * @internal
   */
  private onTouched?: () => void;

  /**
   * Sets the checked state of the checkbox.
   * @param checked The checked state of the checkbox.
   * @internal
   */
  writeValue(checked: boolean): void {
    this.checked = checked;
  }

  /**
   * Registers a callback function that should be called when the checkbox checked state changes.
   * @param fn The callback function.
   * @internal
   */
  registerOnChange(fn: (checked: boolean) => void): void {
    this.onChange = fn;
  }

  /**
   * Registers a callback function that should be called when the checkbox is blurred.
   * @param fn The callback function.
   * @internal
   */
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  /**
   * Sets the disabled state of the checkbox.
   * @param isDisabled The disabled state of the checkbox.
   * @internal
   */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
