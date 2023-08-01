import { InjectionToken, inject } from '@angular/core';
import type { NgpTooltipTriggerDirective } from './tooltip-trigger.directive';

export const NgpTooltipTriggerToken = new InjectionToken<NgpTooltipTriggerDirective>(
  'NgpTooltipTriggerToken',
);

export function injectTooltipTrigger(): NgpTooltipTriggerDirective {
  return inject(NgpTooltipTriggerToken);
}
