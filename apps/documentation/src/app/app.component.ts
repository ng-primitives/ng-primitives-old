import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideInfo, lucideSearch } from '@ng-icons/lucide';
import { NgpButtonComponent } from '@ng-primitives/button';
import { NgpCheckboxComponent } from '@ng-primitives/checkbox';
import {
  NgpErrorComponent,
  NgpFormFieldComponent,
  NgpHintComponent,
  NgpLabelComponent,
} from '@ng-primitives/form';
import { NgpInputComponent, NgpInputGroupComponent } from '@ng-primitives/input';
import { NgpTooltipDirective } from '@ng-primitives/tooltip';

@Component({
  standalone: true,
  imports: [
    NgpButtonComponent,
    NgpInputComponent,
    NgpInputGroupComponent,
    NgIconComponent,
    NgpTooltipDirective,
    NgpCheckboxComponent,
    NgpFormFieldComponent,
    NgpHintComponent,
    NgpErrorComponent,
    NgpLabelComponent,
  ],
  selector: 'ng-primitives-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  viewProviders: [provideIcons({ lucideSearch, lucideInfo })],
})
export class AppComponent {}
