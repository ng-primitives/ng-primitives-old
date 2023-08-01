import { InjectionToken, inject } from '@angular/core';
import type { NgpTabsetDirective } from './tabset.directive';

export const NgpTabsetToken = new InjectionToken<NgpTabsetDirective>('NgpTabsetToken');

/**
 * Inject the tabset directive instance
 */
export function injectTabset(): NgpTabsetDirective {
  return inject(NgpTabsetToken);
}
