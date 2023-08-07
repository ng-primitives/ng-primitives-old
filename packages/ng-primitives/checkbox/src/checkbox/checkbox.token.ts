import { InjectionToken, inject } from '@angular/core';
import type { NgpCheckboxDirective } from './checkbox.directive';

export const NgpCheckboxToken = new InjectionToken<NgpCheckboxDirective>('NgpCheckboxToken');

export function injectCheckbox(): NgpCheckboxDirective {
  return inject(NgpCheckboxToken);
}
