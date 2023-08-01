import { InjectionToken, inject } from '@angular/core';
import type { NgpSwitchDirective } from './switch.directive';

export const NgpSwitchToken = new InjectionToken<NgpSwitchDirective>('NgpSwitchToken');

export function injectSwitch(): NgpSwitchDirective {
  return inject(NgpSwitchToken);
}
