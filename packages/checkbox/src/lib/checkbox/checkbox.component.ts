import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  booleanAttribute,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideMinus } from '@ng-icons/lucide';
import { NgpDisabledDirective, NgpSizeDirective } from '@ng-primitives/common';

let uniqueId = 0;

@Component({
  selector: 'ngp-checkbox',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: NgpCheckboxComponent, multi: true }],
  viewProviders: [provideIcons({ lucideCheck, lucideMinus })],
  hostDirectives: [
    { directive: NgpSizeDirective, inputs: ['ngpSize: size'] },
    { directive: NgpDisabledDirective, inputs: ['ngpDisabled: disabled'] },
  ],
})
export class NgpCheckboxComponent implements ControlValueAccessor {
  /**
   * Define the checkbox size
   */
  @Input() size?: CheckboxSize;

  /**
   * Define the checkbox id
   */
  @Input() id = `checkbox-${uniqueId++}`;

  /**
   * Define the checked state
   */
  @Input({ transform: booleanAttribute }) checked = false;

  /**
   * Define the indeterminate state
   */
  @Input({ transform: booleanAttribute }) indeterminate = false;

  /**
   * Emit when the checked state change
   */
  @Output() readonly checkedChange = new EventEmitter<boolean>();

  /**
   * Store the onChange callback
   */
  private _onChange?: (checked: boolean) => void;

  /**
   * Store the onTouched callback
   */
  protected onTouched?: () => void;

  /**
   * Define a unique id for the input
   */
  get inputId(): string {
    return `${this.id}-input`;
  }

  writeValue(checked: boolean): void {
    this.checked = checked;
  }

  registerOnChange(fn: (checked: boolean) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  /**
   * Toggle the checked state
   */
  toggle(): void {
    this.checked = !this.checked;
    this._onChange?.(this.checked);
    this.checkedChange.emit(this.checked);
  }
}

export type CheckboxSize = 'md' | 'lg';
