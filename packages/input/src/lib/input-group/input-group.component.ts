import { ChangeDetectionStrategy, Component, Input, booleanAttribute } from '@angular/core';
import { NgpDisabledDirective, NgpSizeDirective } from '@ng-primitives/common';
import { InputSize } from '../input/input.component';

@Component({
  selector: 'ngp-input-group',
  standalone: true,
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    { directive: NgpSizeDirective, inputs: ['ngpSize:size'] },
    { directive: NgpDisabledDirective, inputs: ['ngpDisabled:disabled'] },
  ],
})
export class NgpInputGroupComponent {
  /**
   * Define the input group size.
   */
  @Input() size?: InputSize;

  /**
   * Define the input group disabled state.
   * @default false
   */
  @Input({ transform: booleanAttribute }) disabled?: boolean;
}
