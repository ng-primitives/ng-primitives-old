import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideInfo, lucideSearch } from '@ng-icons/lucide';
import {
  NgpAlertComponent,
  NgpAlertMessageComponent,
  NgpAlertTitleComponent,
} from '@ng-primitives/alert';
import { NgpBadgeComponent } from '@ng-primitives/badge';
import { NgpButtonComponent, NgpIconButtonComponent } from '@ng-primitives/button';
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
    NgpAlertComponent,
    NgpAlertTitleComponent,
    NgpAlertMessageComponent,
    NgpButtonComponent,
    NgpIconButtonComponent,
    NgpInputComponent,
    NgpInputGroupComponent,
    NgIconComponent,
    NgpTooltipDirective,
    NgpCheckboxComponent,
    NgpFormFieldComponent,
    NgpHintComponent,
    NgpErrorComponent,
    NgpLabelComponent,
    NgpBadgeComponent,
  ],
  selector: 'ng-primitives-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  viewProviders: [provideIcons({ lucideSearch, lucideInfo })],
})
export class AppComponent {}
