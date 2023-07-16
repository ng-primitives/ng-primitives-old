import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgpSizeDirective } from '@ng-primitives/common';

@Component({
  selector: 'input[ngp-input]',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [{ directive: NgpSizeDirective, inputs: ['ngpSize: size'] }],
})
export class NgpInputComponent {
  /** Define the size variant */
  @Input() size?: InputSize;
}

export type InputSize = 'sm' | 'md' | 'lg';
