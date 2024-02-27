import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgpSelectDirective } from '@ng-primitives/ng-primitives/select';

@Component({
  selector: 'ngp-select-example',
  standalone: true,
  templateUrl: './select.example.html',
  styleUrl: './select.example.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgpSelectDirective],
})
export class SelectExample {}
