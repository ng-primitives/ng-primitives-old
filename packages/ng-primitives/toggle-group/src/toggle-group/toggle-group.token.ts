import { InjectionToken, inject } from '@angular/core';
import type { NgpToggleGroupMultiDirective } from '../toggle-group-multi/toggle-group-multi.directive';
import type { NgpToggleGroupDirective } from './toggle-group.directive';

export const NgpToggleGroupToken = new InjectionToken<
  NgpToggleGroupDirective | NgpToggleGroupMultiDirective
>('NgpToggleGroupToken');

export function injectToggleGroup(): NgpToggleGroupDirective | NgpToggleGroupMultiDirective {
  return inject(NgpToggleGroupToken);
}
