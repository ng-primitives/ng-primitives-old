import {
  AfterContentInit,
  ContentChildren,
  Directive,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChanges,
  booleanAttribute,
} from '@angular/core';
import {
  NgpRovingFocusGroupDirective,
  injectRovingFocusGroup,
} from '@ng-primitives/ng-primitives/roving-focus';
import type { NgpToggleGroupButtonDirective } from '../toggle-group-button/toggle-group-button.directive';
import { NgpToggleGroupButtonToken } from '../toggle-group-button/toggle-group-button.token';
import { NgpToggleGroupToken } from './toggle-group.token';

@Directive({
  selector: '[ngpToggleGroup]',
  standalone: true,
  hostDirectives: [
    {
      directive: NgpRovingFocusGroupDirective,
      inputs: ['ngpRovingFocusGroupWrap:wrap', 'ngpRovingFocusGroupOrientation:orientation'],
    },
  ],
  providers: [{ provide: NgpToggleGroupToken, useExisting: NgpToggleGroupDirective }],
  host: {
    role: 'group',
    '[attr.data-orientation]': 'orientation',
  },
})
export class NgpToggleGroupDirective implements OnInit, OnChanges, AfterContentInit {
  /**
   * Access the roving focus group
   */
  private readonly rovingFocusGroup = injectRovingFocusGroup();

  /**
   * The selected toggle button.
   */
  @Input('ngpToggleGroupValue') value: string | null = null;

  /**
   * The orientation of the toggle group.
   * @default 'horizontal'
   */
  @Input('ngpToggleGroupOrientation') orientation: 'horizontal' | 'vertical' = 'horizontal';

  /**
   * Whether the toggle group is disabled.
   * @default false
   */
  @Input({ alias: 'ngpToggleGroupDisabled', transform: booleanAttribute }) disabled = false;

  /**
   * Whether the toggle group roving focus should wrap.
   * @default true
   */
  @Input({ alias: 'ngpToggleGroupWrap', transform: booleanAttribute }) wrap = true;

  /**
   * Event emitted when the selected toggle button changes.
   */
  @Input('ngpToggleGroupValueChange') readonly valueChange = new EventEmitter<string | null>();

  /**
   * Access the buttons in the toggle group.
   */
  @ContentChildren(NgpToggleGroupButtonToken)
  protected buttons?: QueryList<NgpToggleGroupButtonDirective>;

  ngOnInit(): void {
    // the toggle button group has a default orientation of horizontal
    // whereas the roving focus group has a default orientation of vertical
    // if the toggle button group input is not defined, the orientation will not be set
    // in the roving focus group and the default vertical orientation will be used.
    // we must initially set the orientation of the roving focus group to match the toggle button group orientation
    this.rovingFocusGroup.setOrientation(this.orientation);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('disabled' in changes) {
      this.buttons?.forEach(button => button.updateDisabled());
    }
  }

  ngAfterContentInit(): void {
    if (this.disabled) {
      this.buttons?.forEach(button => button.updateDisabled());
    }
  }

  /**
   * Determine if a value is selected.
   * @param value The value to check.
   * @returns Whether the value is selected.
   * @internal
   */
  isSelected(value: string): boolean {
    return this.value === value;
  }

  /**
   * Toggle a value.
   * @param value The value to toggle.
   * @internal
   */
  toggle(value: string): void {
    if (this.disabled) {
      return;
    }

    this.value = this.value === value ? null : value;
    this.valueChange.emit(this.value);
  }
}
