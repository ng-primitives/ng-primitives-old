import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideInfo, lucideSearch } from '@ng-icons/lucide';
import {
  NgpOverlayArrowDirective,
  NgpOverlayComponent,
  NgpOverlayContentDirective,
  NgpOverlayTriggerDirective,
} from '@ng-primitives/overlay';
import {
  NgpTabButtonDirective,
  NgpTabListDirective,
  NgpTabPanelDirective,
  NgpTabsetDirective,
} from '@ng-primitives/tabs';
import {
  NgpTooltipArrowDirective,
  NgpTooltipDirective,
  NgpTooltipTriggerDirective,
} from '@ng-primitives/tooltip';

@Component({
  standalone: true,
  imports: [
    // Tabs
    NgpTabsetDirective,
    NgpTabButtonDirective,
    NgpTabListDirective,
    NgpTabPanelDirective,

    // Overlay
    NgpOverlayComponent,
    NgpOverlayArrowDirective,
    NgpOverlayTriggerDirective,
    NgpOverlayContentDirective,

    // Tooltip
    NgpTooltipDirective,
    NgpTooltipTriggerDirective,
    NgpTooltipArrowDirective,
  ],
  selector: 'ng-primitives-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  viewProviders: [provideIcons({ lucideSearch, lucideInfo })],
})
export class AppComponent {}
