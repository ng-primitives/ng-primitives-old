import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
  booleanAttribute,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgpRovingFocusGroupDirective } from '@ng-primitives/ng-primitives/roving-focus';
import { NgpRadioGroupToken } from './radio-group.token';

@Directive({
  selector: '[ngpRadioGroup]',
  standalone: true,
  providers: [
    { provide: NgpRadioGroupToken, useExisting: NgpRadioGroupDirective },
    { provide: NG_VALUE_ACCESSOR, useExisting: NgpRadioGroupDirective, multi: true },
  ],
  hostDirectives: [NgpRovingFocusGroupDirective],
  host: {
    role: 'radiogroup',
    '[attr.aria-orientation]': 'orientation',
    '[attr.data-disabled]': 'disabled ? "" : null',
  },
})
export class NgpRadioGroupDirective implements ControlValueAccessor {
  /**
   * The value of the radio group.
   */
  @Input('ngpRadioGroupValue') value?: string;

  /**
   * Whether the radio group is disabled.
   */
  @Input({ alias: 'ngpRadioGroupDisabled', transform: booleanAttribute }) disabled: boolean = false;

  /**
   * The orientation of the radio group.
   * @default 'horizontal'
   */
  @Input('ngpRadioGroupOrientation') orientation: 'horizontal' | 'vertical' = 'horizontal';

  /**
   * Event emitted when the value of the radio group changes.
   */
  @Output('ngpRadioGroupValueChange') readonly valueChange = new EventEmitter<string>();

  /**
   * The callback function to call when the value of the radio group changes.
   * @internal
   */
  private onChange?: (value: string) => void;

  /**
   * The callback function to call when the radio group is touched.
   * @internal
   */
  private onTouched?: () => void;

  /**
   * Select a radio item.
   * @param value The value of the radio item to select.
   */
  select(value: string): void {
    this.value = value;
    this.valueChange.emit(value);
    this.onChange?.(value);
  }

  /**
   * Update the value of the radio group.
   * @param value The new value of the radio group.
   * @internal
   */
  writeValue(value: string): void {
    this.value = value;
  }

  /**
   * Register a callback function to call when the value of the radio group changes.
   * @param fn The callback function to call when the value of the radio group changes.
   * @internal
   */
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  /**
   * Set the disabled state of the radio group.
   * @param isDisabled Whether the radio group is disabled.
   * @internal
   */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  /**
   * When focus leaves the radio group, mark it as touched.
   * @internal
   */
  @HostListener('focusout')
  protected onFocusout(): void {
    this.onTouched?.();
  }
}
