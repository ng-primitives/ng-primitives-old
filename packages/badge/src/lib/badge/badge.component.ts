import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, booleanAttribute } from '@angular/core';
import { NgpSizeDirective, NgpColorDirective } from '@ng-primitives/common';

@Component({
  selector: 'ngp-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    { directive: NgpSizeDirective, inputs: ['ngpSize: size'] },
    { directive: NgpColorDirective, inputs: ['ngpColor: color'] }
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
  @Input({ transform: booleanAttribute }) dot: boolean = false;
}

export type BadgeSize = 'sm' | 'md' | 'lg';

export type BadgeColor = 'primary' | 'secondary' | 'blue' | 'green' | 'red' | 'yellow' | 'purple';
