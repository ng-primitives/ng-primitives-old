import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideInfo, lucideSearch } from '@ng-icons/lucide';
import {
  NgpAccordionContentDirective,
  NgpAccordionDirective,
  NgpAccordionHeaderDirective,
  NgpAccordionPanelDirective,
  NgpAccordionTriggerDirective,
} from '@ng-primitives/ng-primitives/accordion';
import {
  NgpOverlayArrowDirective,
  NgpOverlayDirective,
  NgpOverlayTriggerDirective,
} from '@ng-primitives/ng-primitives/overlay';
import {
  NgpProgressDirective,
  NgpProgressIndicatorDirective,
} from '@ng-primitives/ng-primitives/progress';
import { NgpSwitchDirective, NgpSwitchThumbDirective } from '@ng-primitives/ng-primitives/switch';
import {
  NgpTabButtonDirective,
  NgpTabListDirective,
  NgpTabPanelDirective,
  NgpTabsetDirective,
} from '@ng-primitives/ng-primitives/tabs';
import {
  NgpTooltipArrowDirective,
  NgpTooltipDirective,
  NgpTooltipTriggerDirective,
} from '@ng-primitives/ng-primitives/tooltip';
import { NgpVisuallyHiddenDirective } from '@ng-primitives/ng-primitives/visually-hidden';

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

    // Visually Hidden
    NgpVisuallyHiddenDirective,

    // Accordion
    NgpAccordionDirective,
    NgpAccordionPanelDirective,
    NgpAccordionContentDirective,
    NgpAccordionHeaderDirective,
    NgpAccordionTriggerDirective,

    // Switch
    NgpSwitchDirective,
    NgpSwitchThumbDirective,
  ],
  selector: 'ng-primitives-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  viewProviders: [provideIcons({ lucideSearch, lucideInfo })],
})
export class AppComponent {
  progress = 50;
}
