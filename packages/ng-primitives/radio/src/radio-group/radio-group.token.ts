import { InjectionToken, inject } from '@angular/core';
import type { NgpRadioGroupDirective } from './radio-group.directive';

export const NgpRadioGroupToken = new InjectionToken<NgpRadioGroupDirective>('NgpRadioGroupToken');

export function injectRadioGroup(): NgpRadioGroupDirective {
  return inject(NgpRadioGroupToken);
}
