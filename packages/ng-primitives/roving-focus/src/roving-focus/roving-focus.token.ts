import { InjectionToken, inject } from '@angular/core';
import type { NgpRovingFocusDirective } from './roving-focus.directive';

export const NgpRovingFocusToken = new InjectionToken<NgpRovingFocusDirective>(
  'NgpRovingFocusToken',
);

/**
 * Inject the roving focus directive instance.
 */
export function injectRovingFocusGroup(): NgpRovingFocusDirective {
  return inject(NgpRovingFocusToken);
}
