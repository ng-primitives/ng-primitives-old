import { InjectionToken, inject } from '@angular/core';
import type { NgpOverlayTriggerDirective } from './overlay-trigger.directive';

export const NgpOverlayTriggerToken = new InjectionToken<NgpOverlayTriggerDirective>(
  'NgpOverlayTriggerToken',
);

/**
 * Inject the overlay trigger directive
 */
export function injectOverlayTrigger(): NgpOverlayTriggerDirective {
  return inject(NgpOverlayTriggerToken);
}
