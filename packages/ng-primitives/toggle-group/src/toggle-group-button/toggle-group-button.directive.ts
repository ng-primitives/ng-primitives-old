import {
  Directive,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
  booleanAttribute,
} from '@angular/core';
import {
  NgpRovingFocusItemDirective,
  injectRovingFocusItem,
} from '@ng-primitives/ng-primitives/roving-focus';
import { injectToggleGroup } from '../toggle-group/toggle-group.token';
import { NgpToggleGroupButtonToken } from './toggle-group-button.token';

@Directive({
  selector: 'button[ngpToggleGroupButton]',
  standalone: true,
  hostDirectives: [NgpRovingFocusItemDirective],
  providers: [{ provide: NgpToggleGroupButtonToken, useExisting: NgpToggleGroupButtonDirective }],
  host: {
    role: 'radio',
    '[attr.aria-checked]': 'checked',
    '[attr.aria-disabled]': 'disabled || toggleGroup.disabled',
    '[attr.data-disabled]': 'disabled || toggleGroup.disabled',
    '[attr.data-state]': 'checked ? "on" : "off"',
    '[attr.data-orientation]': 'toggleGroup.orientation',
  },
})
export class NgpToggleGroupButtonDirective implements OnChanges {
  /**
   * Access the toggle group.
   */
  protected readonly toggleGroup = injectToggleGroup();

  /**
   * Access the roving focus item.
   */
  private readonly rovingFocusItem = injectRovingFocusItem();

  /**
   * The value of this toggle button.
   */
  @Input({ alias: 'ngpToggleGroupButtonValue', required: true }) value!: string;

  /**
   * Whether this toggle button is disabled.
   * @default false
   */
  @Input({ alias: 'ngpToggleGroupButtonDisabled', transform: booleanAttribute }) disabled = false;

  /**
   * Whether this toggle button is checked.
   */
  protected get checked(): boolean {
    return this.toggleGroup.isSelected(this.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('disabled' in changes) {
      this.updateDisabled();
    }
  }

  /**
   * Toggle this toggle button.
   */
  @HostListener('click')
  toggle(): void {
    if (this.disabled) {
      return;
    }

    this.toggleGroup.toggle(this.value);
  }

  /**
   * Ensure the disabled state is propagated to the roving focus item.
   * @internal
   */
  updateDisabled(): void {
    this.rovingFocusItem.disabled = this.disabled || this.toggleGroup.disabled;
  }
}
