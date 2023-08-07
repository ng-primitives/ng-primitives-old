import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { radixCheck } from '@ng-icons/radix-icons';
import {
  NgpCheckboxDirective,
  NgpCheckboxIndicatorDirective,
} from '@ng-primitives/ng-primitives/checkbox';

@Component({
  standalone: true,
  imports: [CommonModule, NgpCheckboxDirective, NgpCheckboxIndicatorDirective, NgIconComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [provideIcons({ radixCheck })],
})
export class AppComponent {
  checked = false;
}
