import { InjectionToken, inject } from '@angular/core';
import type { NgpRovingFocusGroupDirective } from './roving-focus-group.directive';

export const NgpRovingFocusGroupToken = new InjectionToken<NgpRovingFocusGroupDirective>(
  'NgpRovingFocusToken',
);

/**
 * Inject the roving focus directive instance.
 */
export function injectRovingFocusGroup(): NgpRovingFocusGroupDirective {
  return inject(NgpRovingFocusGroupToken);
}
