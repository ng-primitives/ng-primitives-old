import { InjectionToken, inject } from '@angular/core';
import type { NgpRovingFocusItemDirective } from './roving-focus-item.directive';

export const NgpRovingFocusItemToken = new InjectionToken<NgpRovingFocusItemDirective>(
  'NgpRovingFocusItemToken',
);

export function injectRovingFocusItem(): NgpRovingFocusItemDirective {
  return inject(NgpRovingFocusItemToken);
}
