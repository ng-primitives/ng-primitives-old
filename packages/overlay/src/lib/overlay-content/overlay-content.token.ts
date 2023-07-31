import { InjectionToken } from '@angular/core';
import type { NgpAccordionContentDirective } from '@ng-primitives/accordion';

export const NgpOverlayContentToken = new InjectionToken<NgpAccordionContentDirective>(
  'NgpOverlayContentToken',
);
