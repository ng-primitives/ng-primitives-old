import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
  booleanAttribute,
} from '@angular/core';
import { NgpColorDirective, NgpSizeDirective } from '@ng-primitives/common';

@Component({
  selector: 'ngp-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'ngp-badge',
    '[class.ngp-bordered]': 'bordered',
    '[class.ngp-rounded]': 'rounded',
  },
  hostDirectives: [
    { directive: NgpSizeDirective, inputs: ['ngpSize: size'] },
    { directive: NgpColorDirective, inputs: ['ngpColor: color'] },
  ],
})
export class NgpBadgeComponent {
  /**
   * Define the badge size.
   * @default 'md'
   */
  @Input() size?: BadgeSize;

  /**
   * Define the badge color.
   * @default 'blue'
   */
  @Input() color?: BadgeColor;

  /**
   * Define if the dot should be displayed.
   * @default false
   */
  @Input({ transform: booleanAttribute }) dot = false;

  /**
   * Determine if the badge should have a border.
   * @default false
   */
  @Input({ transform: booleanAttribute }) bordered = false;

  /**
   * Determine if the badge should be rounded.
   * @default false
   */
  @Input({ transform: booleanAttribute }) rounded = false;
}

export type BadgeSize = 'sm' | 'md' | 'lg';

export type BadgeColor =
  | 'gray'
  | 'secondary'
  | 'blue'
  | 'green'
  | 'red'
  | 'yellow'
  | 'purple'
  | string;
