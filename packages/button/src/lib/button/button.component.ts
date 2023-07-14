import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: '[ngp-button]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {}
