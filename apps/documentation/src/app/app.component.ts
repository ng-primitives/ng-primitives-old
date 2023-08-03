import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideInfo, lucideSearch } from '@ng-icons/lucide';
import {
  radixTextAlignCenter,
  radixTextAlignLeft,
  radixTextAlignRight,
} from '@ng-icons/radix-icons';
import {
  NgpAccordionContentDirective,
  NgpAccordionDirective,
  NgpAccordionHeaderDirective,
  NgpAccordionPanelDirective,
  NgpAccordionTriggerDirective,
} from '@ng-primitives/ng-primitives/accordion';
import {
  NgpAvatarDirective,
  NgpAvatarFallbackDirective,
  NgpAvatarImageDirective,
} from '@ng-primitives/ng-primitives/avatar';
import {
  NgpOverlayArrowDirective,
  NgpOverlayDirective,
  NgpOverlayTriggerDirective,
} from '@ng-primitives/ng-primitives/overlay';
import {
  NgpProgressDirective,
  NgpProgressIndicatorDirective,
} from '@ng-primitives/ng-primitives/progress';
import { NgpSeparatorDirective } from '@ng-primitives/ng-primitives/separator';
import { NgpSwitchDirective, NgpSwitchThumbDirective } from '@ng-primitives/ng-primitives/switch';
import {
  NgpTabButtonDirective,
  NgpTabListDirective,
  NgpTabPanelDirective,
  NgpTabsetDirective,
} from '@ng-primitives/ng-primitives/tabs';
import { NgpToggleDirective } from '@ng-primitives/ng-primitives/toggle';
import {
  NgpToggleGroupButtonDirective,
  NgpToggleGroupDirective,
} from '@ng-primitives/ng-primitives/toggle-group';
import {
  NgpTooltipArrowDirective,
  NgpTooltipDirective,
  NgpTooltipTriggerDirective,
} from '@ng-primitives/ng-primitives/tooltip';
import { NgpVisuallyHiddenDirective } from '@ng-primitives/ng-primitives/visually-hidden';

@Component({
  standalone: true,
  imports: [
    // Icons
    NgIconComponent,
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

    // Separator
    NgpSeparatorDirective,

    // Toggle
    NgpToggleDirective,

    // Avatar
    NgpAvatarDirective,
    NgpAvatarImageDirective,
    NgpAvatarFallbackDirective,

    // Toggle Group
    NgpToggleGroupDirective,
    NgpToggleGroupButtonDirective,
  ],
  selector: 'ng-primitives-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  viewProviders: [
    provideIcons({
      lucideSearch,
      lucideInfo,
      radixTextAlignLeft,
      radixTextAlignCenter,
      radixTextAlignRight,
    }),
  ],
})
export class AppComponent {
  progress = 50;
}
