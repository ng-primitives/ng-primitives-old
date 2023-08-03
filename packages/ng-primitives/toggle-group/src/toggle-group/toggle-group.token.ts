import { InjectionToken, inject } from '@angular/core';
import type { NgpToggleGroupDirective } from './toggle-group.directive';

export const NgpToggleGroupToken = new InjectionToken<NgpToggleGroupDirective>(
  'NgpToggleGroupToken',
);

export function injectToggleGroup(): NgpToggleGroupDirective {
  return inject(NgpToggleGroupToken);
}
