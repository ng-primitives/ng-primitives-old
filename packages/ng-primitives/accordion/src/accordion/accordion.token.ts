import { InjectionToken, inject } from '@angular/core';
import type { NgpAccordionDirective } from './accordion.directive';

export const NgpAccordionToken = new InjectionToken<NgpAccordionDirective>('NgpAccordionToken');

export function injectAccordion(): NgpAccordionDirective {
  return inject(NgpAccordionToken);
}
