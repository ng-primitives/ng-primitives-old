import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideInfo, lucideSearch } from '@ng-icons/lucide';
import { NgpRovingFocusDirective, NgpRovingFocusItemDirective } from '@ng-primitives/roving-focus';
import {
  NgpTabButtonDirective,
  NgpTabListDirective,
  NgpTabPanelDirective,
  NgpTabsetDirective,
} from '@ng-primitives/tabs';

@Component({
  standalone: true,
  imports: [
    NgpTabsetDirective,
    NgpTabButtonDirective,
    NgpTabListDirective,
    NgpTabPanelDirective,
    NgpRovingFocusDirective,
    NgpRovingFocusItemDirective,
  ],
  selector: 'ng-primitives-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  viewProviders: [provideIcons({ lucideSearch, lucideInfo })],
})
export class AppComponent {}
