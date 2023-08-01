import { InjectionToken, inject } from '@angular/core';
import type { NgpAccordionPanelDirective } from './accordion-panel.directive';

export const NgpAccordionPanelToken = new InjectionToken<NgpAccordionPanelDirective>(
  'NgpAccordionPanelToken',
);

export function injectAccordionPanel(): NgpAccordionPanelDirective {
  return inject(NgpAccordionPanelToken);
}
