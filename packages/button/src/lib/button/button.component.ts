import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ColorDirective, ColorVariant, SizeDirective, SizeVariant } from '@ng-primitives/common';

@Component({
  selector: '[ngp-button]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    { directive: ColorDirective, inputs: ['ngpColor: color'] },
    { directive: SizeDirective, inputs: ['ngpSize: size'] },
  ],
})
export class NgpButtonComponent {
  /** Define the color variant */
  @Input() color?: ColorVariant;

  /** Define the size variant */
  @Input() size?: SizeVariant;
}
