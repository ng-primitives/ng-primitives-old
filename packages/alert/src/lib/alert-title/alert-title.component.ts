import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngp-alert-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-title.component.html',
  styleUrls: ['./alert-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgpAlertTitleComponent {}
