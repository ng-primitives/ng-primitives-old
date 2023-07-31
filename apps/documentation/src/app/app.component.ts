import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideInfo, lucideSearch } from '@ng-icons/lucide';
import {
  NgpOverlayArrowDirective,
  NgpOverlayDirective,
  NgpOverlayTriggerDirective,
} from '@ng-primitives/overlay';
import { NgpProgressDirective, NgpProgressIndicatorDirective } from '@ng-primitives/progress';
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
    NgpOverlayDirective,
    NgpOverlayArrowDirective,
    NgpOverlayTriggerDirective,

    // Tooltip
    NgpTooltipDirective,
    NgpTooltipTriggerDirective,
    NgpTooltipArrowDirective,

    // Progress
    NgpProgressDirective,
    NgpProgressIndicatorDirective,
  ],
  selector: 'ng-primitives-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  viewProviders: [provideIcons({ lucideSearch, lucideInfo })],
})
export class AppComponent {
  progress = 50;
}
