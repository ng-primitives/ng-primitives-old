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
  /** Define the size of the input group */
  @Input() size?: InputSize;

  /** Determine if the input group is disabled */
  @Input({ transform: booleanAttribute }) disabled?: boolean;
}
