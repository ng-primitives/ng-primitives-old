import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  ColorVariant,
  NgpColorDirective,
  NgpSizeDirective,
  SizeVariant,
} from '@ng-primitives/common';

@Component({
  selector: 'button[ngp-icon-button]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    { directive: NgpColorDirective, inputs: ['ngpColor: color'] },
    { directive: NgpSizeDirective, inputs: ['ngpSize: size'] },
  ],
})
export class NgpIconButtonComponent {
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
