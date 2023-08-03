import { InjectionToken, inject } from '@angular/core';
import type { NgpToggleGroupButtonDirective } from './toggle-group-button.directive';

export const NgpToggleGroupButtonToken = new InjectionToken<NgpToggleGroupButtonDirective>(
  'NgpToggleGroupButtonToken',
);

export function injectToggleGroupButton(): NgpToggleGroupButtonDirective {
  return inject(NgpToggleGroupButtonToken);
}
