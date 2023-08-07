import { Directive, HostListener, Input, booleanAttribute } from '@angular/core';
import { NgpRovingFocusItemDirective } from '@ng-primitives/ng-primitives/roving-focus';
import { injectRadioGroup } from '../radio-group/radio-group.token';
import { NgpRadioItemToken } from './radio-item.token';

@Directive({
  selector: 'button[ngpRadioItem]',
  standalone: true,
  hostDirectives: [NgpRovingFocusItemDirective],
  providers: [{ provide: NgpRadioItemToken, useExisting: NgpRadioItemDirective }],
  host: {
    type: 'button',
    role: 'radio',
    '[attr.aria-checked]': 'radioGroup.value === value ? "true" : "false"',
    '[attr.data-disabled]': 'disabled ? "" : null',
    '[attr.data-state]': 'radioGroup.value === value ? "checked" : "unchecked"',
  },
})
export class NgpRadioItemDirective {
  /**
   * Access the radio group.
   */
  private readonly radioGroup = injectRadioGroup();

  /**
   * The value of the radio item.
   */
  @Input({ alias: 'ngpRadioItemValue', required: true }) value!: string;

  /**
   * Whether the radio item is disabled.
   * @default false
   */
  @Input({ alias: 'ngpRadioItemDisabled', transform: booleanAttribute }) disabled: boolean = false;

  /**
   * Handle keydown events.
   * @param event The keydown event.
   * @internal
   */
  @HostListener('keydown', ['$event'])
  protected onKeydown(event: KeyboardEvent): void {
    // According to WAI ARIA, radio groups don't activate items on enter keypress
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  }

  /**
   * When the item receives focus, select it.
   * @internal
   */
  @HostListener('focus')
  protected onFocus(): void {
    this.radioGroup.select(this.value);
  }

  /**
   * When the item receives a click, select it.
   * @internal
   */
  @HostListener('click')
  protected onClick(): void {
    this.radioGroup.select(this.value);
  }
}
