import { InjectionToken, inject } from '@angular/core';
import type { NgpSelectDirective } from './select.directive';

export const NgpSelectToken = new InjectionToken<NgpSelectDirective>('NgpSelectToken');

export function injectSelect(): NgpSelectDirective {
  return inject(NgpSelectToken);
}
