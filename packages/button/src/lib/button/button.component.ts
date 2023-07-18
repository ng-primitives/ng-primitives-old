import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  ColorVariant,
  NgpColorDirective,
  NgpSizeDirective,
  SizeVariant,
} from '@ng-primitives/common';

@Component({
  selector: '[ngp-button]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    { directive: NgpColorDirective, inputs: ['ngpColor: color'] },
    { directive: NgpSizeDirective, inputs: ['ngpSize: size'] },
  ],
})
export class NgpButtonComponent {
  /**
   * Define the button color variant.
   */
  @Input() color?: ColorVariant;

  /**
   * Define the button size variant.
   * @default 'md'
   */
  @Input() size?: SizeVariant;
}
